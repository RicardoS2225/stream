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
    url: 'https://d2qsan2ut81n2k.cloudfront.net/live/20446f64-67d8-4100-8c4b-20a759a8e919/medialist_15609871089997455276_hls.m3u8',
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    url: 'https://live.eu-north-1b.cf.dmcdn.net/sec2(CsC7Qyd5kAHlYNKc85USmu24xhIo_yf_h_DlqfSbhb27WAmQ1Nk5O0acSfzz_Oakrs6YGHk3etgIThvXQEbyf6YckgtoAi5_DIqsvHcA-kaQtYwYX1XpQ2kDyTt7zbtD)/dm/3/x9oda6c/s/live-380.m3u8',
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
