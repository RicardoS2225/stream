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
          'relative transition-all duration-300 ease-in-out overflow-hidden',
          isHeaderVisible ? 'h-16' : 'h-0'
        )}
      >
        <Header />
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
      </div>

      <div className="flex-1 overflow-y-auto pt-4">
        <ChannelGrid channels={channels} />
      </div>
    </div>
  );
}