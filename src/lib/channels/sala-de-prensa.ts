import type { Channel } from '../types';
import { channels } from './index';

const channelIdMap = channels.reduce((acc, channel) => {
  acc[channel.id] = channel;
  return acc;
}, {} as Record<string, Channel>);

const pressRoomChannelIds: (string | null)[] = [
    'unitel-lpz', 'unitel-cbba', 'unitel-scz', 'bolivia-tv-7-1',
    'red-uno-lpz', 'red-uno-cbba', 'red-uno-scz', 'bolivia-tv-7-2',
    'atb-bolivia', // Assuming ATB LP is the main ATB Bolivia stream
    'atb-scz',
    'bolivision-lpz-hd', // Using HD version as a default for "BOLIVISIÓN"
    'cadena-a',
    'rtp-lpz',
    'pat-scz', // Assuming PAT HD is one of the PATs, maybe the main one
    'pat-lpz', // Assuming PAT is the other
    'f10-hd', // Using HD version for F10
];

export const salaDePrensaChannels: Channel[] = pressRoomChannelIds
  .map(id => id ? channelIdMap[id] : null)
  .filter((channel): channel is Channel => channel !== null && channel !== undefined);
