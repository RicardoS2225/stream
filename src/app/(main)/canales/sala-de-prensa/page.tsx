'use client';

import { useState } from 'react';
import { ChannelGrid } from '@/components/channel-grid';
import { salaDePrensaChannels } from '@/lib/channels/sala-de-prensa';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SalaDePrensaPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  return (
    <div className="flex flex-col h-full w-full">
      <Button
        variant="secondary"
        size="icon"
        className="fixed top-4 left-4 z-50 h-8 w-8 rounded-full shadow-lg"
        onClick={() => setIsHeaderVisible(!isHeaderVisible)}
      >
        {isHeaderVisible ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle Header</span>
      </Button>
      
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

      <div className="flex-1 overflow-y-auto">
        <div className="pt-2">
          <ChannelGrid channels={salaDePrensaChannels} />
        </div>
      </div>
    </div>
  );
}
