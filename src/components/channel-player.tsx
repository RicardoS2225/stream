'use client';

import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import ReactPlayer from 'react-player/lazy';
import {
  Volume2,
  Radio,
  Maximize,
  Loader,
  PictureInPicture2,
} from 'lucide-react';
import type { Channel } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from './ui/tooltip';
import Image from 'next/image';

type ChannelPlayerProps = {
  channel: Channel;
  isSolo: boolean;
  isMuted: boolean;
  onSolo: (id: string | null) => void;
  onSetPipChannel: (channel: Channel | null) => void;
};

export type ChannelPlayerRef = {
  enterFullScreen: () => void;
};

export const ChannelPlayer = forwardRef<ChannelPlayerRef, ChannelPlayerProps>(
  (
    { channel, isSolo, isMuted, onSolo, onSetPipChannel },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<ReactPlayer>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    const videoUrl = channel.url;

    useEffect(() => {
      setHasMounted(true);
    }, []);

    const handleFullScreen = useCallback(() => {
      if (!containerRef.current) return;
      if (!document.fullscreenElement) {
        onSolo(channel.id); // Set this channel to solo when entering fullscreen
        containerRef.current.requestFullscreen().catch(err => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      } else {
        document.exitFullscreen();
      }
    }, [channel.id, onSolo]);

    useImperativeHandle(ref, () => ({
      enterFullScreen: () => {
        handleFullScreen();
      },
    }));

    useEffect(() => {
      const onFullScreenChange = () => {
        // When exiting fullscreen, if this channel was solo, un-solo it.
        if (!document.fullscreenElement && isSolo) {
            onSolo(null); 
        }
      };
      document.addEventListener('fullscreenchange', onFullScreenChange);
      return () =>
        document.removeEventListener('fullscreenchange', onFullScreenChange);
    }, [isSolo, onSolo]);


    const handleSoloClick = () => {
      onSolo(isSolo ? null : channel.id);
    };

    const handlePipClick = () => {
      onSetPipChannel(channel);
    };

    return (
      <TooltipProvider>
        <div
          ref={containerRef}
          className={cn(
            'group relative flex flex-col aspect-video rounded-lg overflow-hidden border-2 transition-colors duration-300 bg-black h-full w-full',
            isSolo ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
          )}
        >
          {channel.logo && (
            <div className="absolute top-2 left-2 z-20 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Image
                src={channel.logo}
                alt={`${channel.name} logo`}
                width={48}
                height={48}
                className={cn('h-8 w-auto rounded-sm object-contain')}
              />
            </div>
          )}
          <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-2 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <h3 className="text-sm font-semibold truncate text-white drop-shadow-md">
              {channel.name}
            </h3>
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-white hover:bg-white/20 hover:text-white"
                    onClick={handlePipClick}
                  >
                    <PictureInPicture2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Pantalla en Pantalla</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={isSolo ? 'default' : 'ghost'}
                    size="icon"
                    className="h-7 w-7 text-white hover:bg-white/20 data-[state=on]:bg-primary"
                    onClick={handleSoloClick}
                  >
                    {isSolo ? <Volume2 className="h-4 w-4" /> : <Radio className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Audio Solo</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-white hover:bg-white/20 hover:text-white"
                    onClick={handleFullScreen}
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Pantalla Completa</TooltipContent>
              </Tooltip>
            </div>
          </header>
          <div className="flex-1 w-full h-full">
            {hasMounted && videoUrl !== 'about:blank' ? (
              <ReactPlayer
                ref={playerRef}
                url={videoUrl}
                playing={isPlaying}
                muted={isMuted}
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
                <p className="text-muted-foreground text-sm p-2 text-center">
                  Canal no disponible
                </p>
              </div>
            )}
            {!isReady && hasMounted && videoUrl !== 'about:blank' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <Loader className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
          </div>
          <footer
            className={cn(
              'absolute bottom-0 left-0 right-0 p-1.5 text-center text-xs text-white bg-gradient-to-t from-black/60 to-transparent transition-opacity',
              isSolo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            )}
          >
            {isSolo ? 'Escuchando...' : 'Subtítulos en vivo (no disponible)'}
          </footer>
        </div>
      </TooltipProvider>
    );
  }
);

ChannelPlayer.displayName = 'ChannelPlayer';
