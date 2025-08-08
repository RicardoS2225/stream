'use client';

import React, { useState, useMemo } from 'react';
import { ChannelPlayer } from './channel-player';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';

type ChannelGridProps = {
  channels: Channel[];
};

export function ChannelGrid({ channels }: ChannelGridProps) {
  const [soloChannelId, setSoloChannelId] = useState<string | null>(null);
  const [mutedChannels, setMutedChannels] = useState<Set<string>>(new Set());

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

  const gridCols = useMemo(() => {
    const count = channels.length;
    if (count <= 1) return 'grid-cols-1';
    if (count <= 4) return 'grid-cols-2';
    if (count <= 9) return 'grid-cols-3';
    if (count <= 16) return 'grid-cols-4';
    return 'grid-cols-5';
  }, [channels.length]);
  
  if (!channels || channels.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 border border-dashed rounded-lg">
        <p className="text-muted-foreground">No hay canales para mostrar.</p>
      </div>
    );
  }

  return (
    <div className={cn('grid gap-4', gridCols)}>
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
  );
}
