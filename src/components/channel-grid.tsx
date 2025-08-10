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
      ? `grid-cols-4 grid-rows-4`
      : `grid-cols-${gridSize}`;

    return (
      <div className={cn('grid gap-2 h-full', gridClasses)}>
        {channels.map(channel => {
          const isPip = channel.id === pipChannelId;
          const isMuted = soloChannelId
            ? soloChannelId !== channel.id
            : false;

          return (
            <div
              key={channel.id}
              className={cn(
                'relative',
                isPip && 'opacity-0 pointer-events-none'
              )}
            >
              <ChannelPlayer
                ref={node => {
                  if (node) {
                    playerRefs.current.set(channel.id, node);
                  } else {
                    playerRefs.current.delete(channel.id);
                  }
                }}
                channel={channel}
                isSolo={soloChannelId === channel.id}
                isMuted={isMuted}
                onSolo={handleSolo}
                onMuteToggle={() => {}} // Mute is now handled by solo
                onSetPipChannel={onSetPipChannel}
              />
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