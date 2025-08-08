import type { Channel } from './types';

// Sample M3U8 stream. Replace with your actual stream URLs.
const sampleStream = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

export const channels: Channel[] = [
  {
    id: 'unitel',
    name: 'Unitel',
    url: 'https://live2.eu-north-1b.cf.dmcdn.net/sec2(vfwGQHTkbneybMakv2OaX0UKSDoEuO0hZ7fQXo7zQunUEyoegU-njh2Kmtholkhm5PqkCw3qF0d4QO1uQ2ewkYrwsJnO0ARLfG5P4HLOIml7YoVveDhvcifhH6KHsFhz)/cloud/3/x7vsezg/d/live-720.m3u8',
  },
  {
    id: 'bolivision',
    name: 'Bolivisión',
    url: sampleStream,
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    url: sampleStream,
  },
  {
    id: 'atb',
    name: 'ATB',
    url: sampleStream,
  },
  {
    id: 'red-pat',
    name: 'Red PAT',
    url: sampleStream,
  },
  {
    id: 'abya-yala',
    name: 'Abya Yala TV',
    url: sampleStream,
  },
  {
    id: 'rtp',
    name: 'RTP',
    url: sampleStream,
  },
  {
    id: 'red-adoracion',
    name: 'Red Adoración',
    url: sampleStream,
  },
  {
    id: 'placeholder-1',
    name: 'Canal Ficticio',
    url: 'about:blank',
  }
];
