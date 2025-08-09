import type { Channel } from '../types';

export const f10Channels: Channel[] = [
  {
    id: 'f10-hd',
    name: 'F10 HD',
    url: 'https://tv2.bitstreaming.net:3235/multi_live/play_720.m3u8',
  },
  {
    id: 'f10-sd',
    name: 'F10 SD',
    url: 'https://tv2.bitstreaming.net:3235/multi_live/play_480.m3u8',
  },
];
