'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { X, GripVertical, Expand } from 'lucide-react';
import type { Channel } from '@/lib/types';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface DraggablePlayerProps {
  channel: Channel;
  onClose: () => void;
  onEnterFullScreen: (channelId: string) => void;
}

export function DraggablePlayer({
  channel,
  onClose,
  onEnterFullScreen,
}: DraggablePlayerProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLButtonElement ||
      e.target.closest('a, button')
    ) {
      return;
    }

    if (!dragRef.current) return;
    setIsDragging(true);
    const rect = dragRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !dragRef.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleEnterFullScreenClick = () => {
    onEnterFullScreen(channel.id);
  };

  return (
    <div
      ref={dragRef}
      className="fixed z-50 w-[440px] max-w-[80vw] resize overflow-auto group"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
    >
      <Card className="flex flex-col shadow-2xl border-2 border-primary overflow-hidden h-full">
        <div
          onMouseDown={handleMouseDown}
          className="flex items-center justify-between bg-card p-2 cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-2">
            <GripVertical className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold text-sm">{channel.name}</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="aspect-video bg-black relative">
          <ReactPlayer
            url={channel.url}
            playing={true}
            muted={false} // Always unmuted when in PiP
            width="100%"
            height="100%"
            config={{
              file: {
                forceHLS: true,
              },
            }}
            controls={false}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button variant="secondary" onClick={handleEnterFullScreenClick}>
              <Expand className="mr-2 h-4 w-4" />
              Volver a la Pantalla
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
