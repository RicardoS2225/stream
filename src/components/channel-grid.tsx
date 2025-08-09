'use client';

import React, { useState, useMemo } from 'react';
import { ChannelPlayer } from './channel-player';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Grid2X2, Grid3X3, Grid } from 'lucide-react';

type ChannelGridProps = {
  channels: Channel[];
};

export function ChannelGrid({ channels }: ChannelGridProps) {
  const [soloChannelId, setSoloChannelId] = useState<string | null>(null);
  const [mutedChannels, setMutedChannels] = useState<Set<string>>(new Set());
  const [gridSize, setGridSize] = useState(3); // Default to 3x3

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
    if (gridSize === 2) return 'grid-cols-2';
    if (gridSize === 3) return 'grid-cols-3';
    if (gridSize === 4) return 'grid-cols-4';
    const count = channels.length;
    if (count <= 1) return 'grid-cols-1';
    if (count <= 4) return 'grid-cols-2';
    if (count <= 9) return 'grid-cols-3';
    if (count <= 16) return 'grid-cols-4';
    return 'grid-cols-5';
  }, [gridSize, channels.length]);
  
  if (!channels || channels.length === 0) {
    return (
      <div className="flex items-center justify-center h-full border border-dashed rounded-lg">
        <p className="text-muted-foreground">No hay canales para mostrar.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col h-full'>
       <div className='flex justify-between items-center mb-4'>
         <div/>
         <div className='flex items-center gap-2'>
            <Button variant={gridSize === 2 ? "secondary" : "ghost"} size="icon" onClick={() => setGridSize(2)}>
                <Grid2X2 className="h-5 w-5"/>
            </Button>
            <Button variant={gridSize === 3 ? "secondary" : "ghost"} size="icon" onClick={() => setGridSize(3)}>
                <Grid3X3 className="h-5 w-5"/>
            </Button>
            <Button variant={gridSize === 4 ? "secondary" : "ghost"} size="icon" onClick={() => setGridSize(4)}>
                <Grid className="h-5 w-5"/>
            </Button>
         </div>
       </div>
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
