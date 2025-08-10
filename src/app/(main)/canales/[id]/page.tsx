'use client';

import { useParams } from 'next/navigation';
import { ChannelPlayer } from '@/components/channel-player';
import { channels } from '@/lib/channels';
import type { Channel } from '@/lib/types';
import { useMemo } from 'react';

export default function SingleChannelPage() {
  const params = useParams();
  const { id } = params;

  const channel = useMemo(() => {
    return channels.find((c: Channel) => c.id === id);
  }, [id]);

  if (!channel) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg text-muted-foreground">Canal no encontrado</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-0 m-0">
      <ChannelPlayer
        key={channel.id}
        channel={channel}
        isSolo={true}
        isMuted={false}
        onSolo={() => {}}
        onMuteToggle={() => {}}
        onSetPipChannel={() => {}}
      />
    </div>
  );
}
