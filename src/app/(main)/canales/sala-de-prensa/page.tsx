'use client';

import { useState, useRef, useCallback } from 'react';
import { ChannelGrid, type ChannelGridRef } from '@/components/channel-grid';
import { salaDePrensaChannels as initialSalaDePrensaChannels } from '@/lib/channels/sala-de-prensa';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Channel } from '@/lib/types';
import { DraggablePlayer } from '@/components/draggable-player';

export default function SalaDePrensaPage() {
  const [channels, setChannels] = useState(initialSalaDePrensaChannels);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [pipChannel, setPipChannel] = useState<Channel | null>(null);
  const gridRef = useRef<ChannelGridRef>(null);
  const dragChannelId = useRef<string | null>(null);

  const handleSetPipChannel = (channel: Channel | null) => {
    setPipChannel(channel);
  };

  const handleEnterFullScreen = useCallback((channelId: string) => {
    gridRef.current?.enterFullScreen(channelId);
    setPipChannel(null); // Close PiP when entering fullscreen
  }, []);

  const handleDragStart = (channelId: string) => {
    dragChannelId.current = channelId;
  };

  const handleDrop = (targetChannelId: string) => {
    if (!dragChannelId.current || dragChannelId.current === targetChannelId) {
      return;
    }

    setChannels(prevChannels => {
      const newChannels = [...prevChannels];
      const draggedIndex = newChannels.findIndex(
        (c) => c.id === dragChannelId.current
      );
      const targetIndex = newChannels.findIndex(
        (c) => c.id === targetChannelId
      );

      if (draggedIndex === -1 || targetIndex === -1) return prevChannels;

      // Swap the channels
      [newChannels[draggedIndex], newChannels[targetIndex]] = [
        newChannels[targetIndex],
        newChannels[draggedIndex],
      ];
      
      return newChannels;
    });
    dragChannelId.current = null;
  };


  return (
    <div className="flex flex-col h-full w-full relative">
      <Button
        variant="secondary"
        size="icon"
        className="fixed top-4 left-4 z-50 h-8 w-8 rounded-full shadow-lg"
        onClick={() => setIsHeaderVisible(!isHeaderVisible)}
      >
        {isHeaderVisible ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle Header</span>
      </Button>

      <div
        className={cn(
          'transition-all duration-300 ease-in-out',
          isHeaderVisible ? 'h-16' : 'h-0'
        )}
      >
        <div
          className={cn(
            'transition-opacity duration-200',
            isHeaderVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Header />
        </div>
      </div>

      <div className="flex-1 overflow-hidden pt-2">
        <ChannelGrid
          ref={gridRef}
          channels={channels}
          isSalaDePrensa={true}
          onSetPipChannel={handleSetPipChannel}
          pipChannelId={pipChannel?.id}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
      </div>

      {pipChannel && (
        <DraggablePlayer
          channel={pipChannel}
          onClose={() => handleSetPipChannel(null)}
          onEnterFullScreen={handleEnterFullScreen}
        />
      )}
    </div>
  );
}
