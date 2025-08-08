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
    url: 'https://www.redpat.tv/proxylpz/index.m3u8',
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    url: 'https://live.eu-north-1b.cf.dmcdn.net/sec2(n6jEIPfSOvZmJ2-yYLS0kmXzMMXRXGnw7tFCkuePCdw4fOmmnhWPvIe3O8S94cPEKxV5sygwZ1S8HJlSf1NHCgdhXQOJNsWf4CH1yFxfpt11Teh1ZcW0lrbI11THBSSz)/dm/3/x9oda6c/s/live-380.m3u8',
  },
  {
    id: 'atb',
    name: 'ATB',
    url: 'https://live.eu-north-1a.cf.dmcdn.net/sec2(6iW31sXJ7LKZrrTSRMVKflx3iJHELtqv62xU9FkQGvSzrzpHKZGAImSyi7g5L-QumTRgNJp7Ie1K40Fyp57LdoCWGZUBaPuoXtX5H78S8bo0wMVNsbHmjAom0tqUJ2ue)/dm/3/x84eirw/s/live-480.m3u8',
  },
  {
    id: 'red-pat',
    name: 'Red PAT',
    url: 'https://www.redpat.tv/proxylpz/index.m3u8',
  },
  {
    id: 'abya-yala',
    name: 'Abya Yala TV',
    url: 'https://seo.tv.bo/tv/XLIpSEO-TV-8.m3u8',
  },
  {
    id: 'rtp',
    name: 'RTP',
    url: 'https://rtp.noxun.net/hls/stream.m3u8',
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
