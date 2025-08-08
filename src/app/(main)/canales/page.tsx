import { ChannelGrid } from '@/components/channel-grid';
import { channels } from '@/lib/data';

export default function CanalesPage() {
  return (
    <div>
      <ChannelGrid channels={channels} />
    </div>
  );
}
