'use client';

import { useState } from 'react';
import { ChannelGrid } from '@/components/channel-grid';
import { channels } from '@/lib/channels';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CanalesPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  return (
    <div className="flex flex-col h-full w-full">
      <div
        className={cn(
          'transition-all duration-300 ease-in-out',
          isHeaderVisible ? 'h-16' : 'h-0'
        )}
      >
        <div className={cn("transition-opacity duration-200", isHeaderVisible ? 'opacity-100' : 'opacity-0')}>
           <Header />
        </div>
      </div>

      <div className="relative flex-1 overflow-y-auto pt-2">
         {/* Botón movido para que esté relativo al contenedor de la cuadrícula */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 left-2 z-50 h-8 w-8 rounded-full shadow-lg"
          onClick={() => setIsHeaderVisible(!isHeaderVisible)}
        >
          {isHeaderVisible ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle Header</span>
        </Button>
        <ChannelGrid channels={channels} />
      </div>
    </div>
  );
}
