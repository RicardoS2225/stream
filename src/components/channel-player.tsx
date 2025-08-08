'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Volume2, VolumeX, Maximize, Rewind, Radio, Loader } from 'lucide-react';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from './ui/tooltip';

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
  const playerRef = useRef<ReactPlayer>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);

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
  
  // Keep track of fullscreen changes (e.g., user pressing Esc)
  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullScreenChange);
  }, []);

  const handleSoloClick = () => {
    onSolo(isSolo ? null : channel.id);
  };
  
  const effectiveMuted = isSolo ? false : isMuted;

  return (
    <TooltipProvider>
      <div
        ref={containerRef}
        className={cn(
          'group relative flex flex-col aspect-video rounded-lg overflow-hidden border-2 transition-colors duration-300 bg-black',
          isSolo ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
        )}
      >
        <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-2 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <h3 className="text-sm font-semibold truncate text-white drop-shadow-md">{channel.name}</h3>
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/20 hover:text-white" disabled>
                  <Rewind className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Rebobinar (Próximamente)</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/20 hover:text-white" onClick={() => onMuteToggle(channel.id)}>
                  {effectiveMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{effectiveMuted ? 'Activar Sonido' : 'Silenciar'}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={isSolo ? 'default' : 'ghost'} size="icon" className="h-7 w-7 text-white hover:bg-white/20 data-[state=on]:bg-primary" onClick={handleSoloClick}>
                  <Radio className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Audio Solo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/20 hover:text-white" onClick={handleFullScreen}>
                  <Maximize className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Pantalla Completa</TooltipContent>
            </Tooltip>
          </div>
        </header>
        <div className="flex-1 w-full h-full">
          {channel.url !== 'about:blank' ? (
              <ReactPlayer
                ref={playerRef}
                url={channel.url}
                playing={isPlaying}
                muted={effectiveMuted}
                onReady={() => setIsReady(true)}
                width="100%"
                height="100%"
                config={{
                  file: {
                    forceHLS: true,
                  },
                }}
              />
          ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">Canal no disponible</p>
              </div>
          )}
           {!isReady && channel.url !== 'about:blank' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
        </div>
        <footer className={cn("absolute bottom-0 left-0 right-0 p-1.5 text-center text-xs text-white bg-gradient-to-t from-black/60 to-transparent transition-opacity", isSolo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}>
          {isSolo ? 'Escuchando...' : 'Subtítulos en vivo (no disponible)'}
        </footer>
      </div>
    </TooltipProvider>
  );
}
