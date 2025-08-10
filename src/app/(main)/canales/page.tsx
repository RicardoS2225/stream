import { ChannelGrid } from '@/components/channel-grid';
import { channels } from '@/lib/channels';

export default function CanalesPage() {
  return (
    <div className="h-full">
      <ChannelGrid channels={channels} />
    </div>
  );
}
