// src/components/channel-grid.tsx
'use client';

import React, { useState } from 'react';
import { ChannelPlayer } from './channel-player';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useGridSize } from '@/contexts/grid-size-context';

type ChannelGridProps = {
  channels: Channel[];
};

export function ChannelGrid({ channels }: ChannelGridProps) {
  const [soloChannelId, setSoloChannelId] = useState<string | null>(null);
  const [mutedChannels, setMutedChannels] = useState<Set<string>>(new Set());
  const { gridSize } = useGridSize();

  const handleMuteToggle = (id: string) => {
    setMutedChannels((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  
  if (!channels || channels.length === 0) {
    return (
      <div className="flex items-center justify-center h-full border border-dashed rounded-lg">
        <p className="text-muted-foreground">No hay canales para mostrar.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col h-full'>
      <div className={cn('grid gap-4 flex-1', `grid-cols-${gridSize}`)}>
        {channels.map((channel) => (
          <ChannelPlayer
            key={channel.id}
            channel={channel}
            isSolo={soloChannelId === channel.id}
            isMuted={mutedChannels.has(channel.id)}
            onSolo={setSoloChannelId}
            onMuteToggle={handleMuteToggle}
          />
        ))}
      </div>
    </div>
  );
}
