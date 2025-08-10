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
    const [mutedChannels, setMutedChannels] = useState<Set<string>>(new Set());
    const { gridSize } = useGridSize();
    const playerRefs = useRef<Map<string, ChannelPlayerRef | null>>(new Map());

    useImperativeHandle(ref, () => ({
      enterFullScreen: (channelId: string) => {
        playerRefs.current.get(channelId)?.enterFullScreen();
      },
    }));

    const handleMuteToggle = (id: string) => {
      if (soloChannelId && soloChannelId === id) {
        setSoloChannelId(null);
      }

      setMutedChannels(prev => {
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
          if (channel.id === pipChannelId) {
            return (
              <Card
                key={`${channel.id}-pip-placeholder`}
                className="flex items-center justify-center bg-muted/40 border-dashed"
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
            );
          }

          const isMuted = soloChannelId
            ? soloChannelId !== channel.id
            : mutedChannels.has(channel.id);

          return (
            <ChannelPlayer
              key={channel.id}
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
              onMuteToggle={handleMuteToggle}
              onSetPipChannel={onSetPipChannel}
            />
          );
        })}
      </div>
    );
  }
);

ChannelGrid.displayName = 'ChannelGrid';
