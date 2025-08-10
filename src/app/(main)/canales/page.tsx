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
    <div className="relative h-full w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-2 left-2 z-50 h-8 w-8 rounded-full shadow-lg"
        onClick={() => setIsHeaderVisible(!isHeaderVisible)}
      >
        {isHeaderVisible ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        <span className="sr-only">Toggle Header</span>
      </Button>

      <div className={cn(
        "transition-all duration-300 ease-in-out",
        isHeaderVisible ? 'opacity-100' : 'opacity-0 -translate-y-full pointer-events-none'
      )}>
         {/* We render a simplified header here for toggling */}
         <div className="sticky top-0 z-40">
            <Header />
         </div>
      </div>
      
      <div className="h-full pt-4">
        <ChannelGrid channels={channels} />
      </div>
    </div>
  );
}
