'use client';

import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { ChannelPlayer, type ChannelPlayerRef } from './channel-player';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useGridSize } from '@/contexts/grid-size-context';
import { Card, CardContent } from './ui/card';

type ChannelGridProps = {
  channels: Channel[];
  isSalaDePrensa?: boolean;
  onSetPipChannel: (channel: Channel | null) => void;
  pipChannelId?: string | null;
};

export type ChannelGridRef = {
  enterFullScreen: (channelId: string) => void;
};

export const ChannelGrid = forwardRef<ChannelGridRef, ChannelGridProps>(
  (
    {
      channels,
      isSalaDePrensa = false,
      onSetPipChannel,
      pipChannelId,
    },
    ref
  ) => {
    const { gridSize } = useGridSize();
    const [soloChannelId, setSoloChannelId] = useState<string | null>(null);
    const playerRefs = useRef<Map<string, ChannelPlayerRef | null>>(new Map());

    useImperativeHandle(ref, () => ({
      enterFullScreen: (channelId: string) => {
        playerRefs.current.get(channelId)?.enterFullScreen();
      },
    }));

    const handleSolo = (id: string | null) => {
      setSoloChannelId(id);
    };

    if (!channels || channels.length === 0) {
      return (
        <div className="flex items-center justify-center h-full border border-dashed rounded-lg">
          <p className="text-muted-foreground">No hay canales para mostrar.</p>
        </div>
      );
    }
    
    const gridClasses = isSalaDePrensa
      ? 'grid-cols-4 grid-rows-4'
      : {
          2: 'grid-cols-2',
          3: 'grid-cols-3',
          4: 'grid-cols-4',
        }[gridSize] || 'grid-cols-3';

    return (
      <div className={cn('grid gap-2 h-full', gridClasses)}>
        {channels.map(channel => {
          const isPip = channel.id === pipChannelId;
          const isSolo = soloChannelId === channel.id;
          
          const isMuted =
            // If there's a solo channel and it's not this one, mute it.
            (soloChannelId !== null && soloChannelId !== channel.id) ||
            // If there's a PiP channel (and no solo channel is active), mute it.
            (pipChannelId !== null && soloChannelId === null);


          return (
            <div
              key={channel.id}
              className={cn('relative')}
            >
              <div className={cn('h-full w-full', isPip ? 'opacity-0 pointer-events-none' : 'opacity-100')}>
                <ChannelPlayer
                  ref={node => {
                    if (node) {
                      playerRefs.current.set(channel.id, node);
                    } else {
                      playerRefs.current.delete(channel.id);
                    }
                  }}
                  channel={channel}
                  isSolo={isSolo}
                  isMuted={isMuted}
                  onSolo={handleSolo}
                  onSetPipChannel={onSetPipChannel}
                />
              </div>
               {isPip && (
                 <Card
                    className="absolute inset-0 flex items-center justify-center bg-muted/40 border-dashed"
                  >
                    <CardContent className="p-0 text-center">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {channel.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        En Pantalla en Pantalla
                      </p>
                    </CardContent>
                  </Card>
               )}
            </div>
          );
        })}
      </div>
    );
  }
);

ChannelGrid.displayName = 'ChannelGrid';
