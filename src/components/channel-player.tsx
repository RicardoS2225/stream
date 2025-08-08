'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Maximize, Rewind, Radio } from 'lucide-react';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

type ChannelPlayerProps = {
  channel: Channel;
  isSolo: boolean;
  isMuted: boolean;
  onSolo: (id: string | null) => void;
  onMuteToggle: (id: string) => void;
};

export function ChannelPlayer({
  channel,
  isSolo,
  isMuted,
  onSolo,
  onMuteToggle,
}: ChannelPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }, []);

  const handleSoloClick = () => {
    onSolo(isSolo ? null : channel.id);
  };
  
  const effectiveMuted = isMuted && !isSolo;

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative flex flex-col aspect-video rounded-lg overflow-hidden border-2 transition-colors duration-300',
        isSolo ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
      )}
    >
      <header className="flex items-center justify-between p-2 bg-background/50 backdrop-blur-sm">
        <h3 className="text-sm font-semibold truncate text-foreground">{channel.name}</h3>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
           <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7" disabled>
                <Rewind className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Rebobinar (Próximamente)</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => onMuteToggle(channel.id)}>
                {effectiveMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{effectiveMuted ? 'Activar Sonido' : 'Silenciar'}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={isSolo ? 'default' : 'ghost'} size="icon" className="h-7 w-7" onClick={handleSoloClick}>
                <Radio className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Audio Solo</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
               <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleFullScreen}>
                <Maximize className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Pantalla Completa</TooltipContent>
          </Tooltip>
        </div>
      </header>
      <div className="flex-1 bg-black">
        {channel.url !== 'about:blank' ? (
            <iframe
            src={channel.url}
            className="w-full h-full border-0"
            title={channel.name}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Canal no disponible</p>
            </div>
        )}
      </div>
      <footer className={cn("p-1.5 text-center text-xs text-muted-foreground bg-background/50 backdrop-blur-sm transition-opacity", isSolo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}>
        {isSolo ? 'Escuchando...' : 'Subtítulos en vivo (no disponible)'}
      </footer>
    </div>
  );
}
