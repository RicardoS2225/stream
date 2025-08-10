'use client';

import { useState } from 'react';
import { ChannelGrid } from '@/components/channel-grid';
import { channels } from '@/lib/channels';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Channel } from '@/lib/types';
import { DraggablePlayer } from '@/components/draggable-player';

export default function CanalesPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [pipChannel, setPipChannel] = useState<Channel | null>(null);

  const handleSetPipChannel = (channel: Channel | null) => {
    setPipChannel(channel);
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

      <div className="flex-1 overflow-y-auto">
        <div className="pt-2">
          <ChannelGrid
            channels={channels}
            onSetPipChannel={handleSetPipChannel}
            pipChannelId={pipChannel?.id}
          />
        </div>
      </div>

      {pipChannel && (
        <DraggablePlayer
          channel={pipChannel}
          onClose={() => handleSetPipChannel(null)}
        />
      )}
    </div>
  );
}