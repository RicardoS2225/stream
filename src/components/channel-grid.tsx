'use client';

import React, { useState } from 'react';
import { ChannelPlayer } from './channel-player';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useGridSize } from '@/contexts/grid-size-context';

type ChannelGridProps = {
  channels: Channel[];
  isSalaDePrensa?: boolean;
};

export function ChannelGrid({ channels, isSalaDePrensa = false }: ChannelGridProps) {
  const [soloChannelId, setSoloChannelId] = useState<string | null>(null);
  const [mutedChannels, setMutedChannels] = useState<Set<string>>(new Set());
  const { gridSize } = useGridSize();

  const handleMuteToggle = (id: string) => {
    // When solo is active, toggling mute on the solo channel should disable solo mode.
    if (soloChannelId && soloChannelId === id) {
      setSoloChannelId(null);
    }
    
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

  const handleSolo = (id: string | null) => {
    setSoloChannelId(id);
    // When solo mode is activated, we can clear the individual mute states
    // so that when solo is turned off, channels return to an unmuted state,
    // or we can preserve them. For now, let's not change the individual mutes.
  };
  
  if (!channels || channels.length === 0) {
    return (
      <div className="flex items-center justify-center h-full border border-dashed rounded-lg">
        <p className="text-muted-foreground">No hay canales para mostrar.</p>
      </div>
    );
  }
  
  const gridClasses = isSalaDePrensa
    ? `grid-cols-4 grid-rows-4` // Always 4x4 grid for Sala de Prensa
    : `grid-cols-${gridSize}`; // Dynamic grid size for other pages

  return (
    <div className={cn('grid gap-2 h-full', gridClasses)}>
      {channels.map((channel) => {
        // A channel is muted if it's in the muted set, UNLESS another channel is solo.
        // If another channel is solo, THIS channel should be muted.
        const isMuted = soloChannelId
          ? soloChannelId !== channel.id
          : mutedChannels.has(channel.id);
          
        return (
          <ChannelPlayer
            key={channel.id}
            channel={channel}
            isSolo={soloChannelId === channel.id}
            isMuted={isMuted}
            onSolo={handleSolo}
            onMuteToggle={handleMuteToggle}
          />
        );
      })}
    </div>
  );
}
