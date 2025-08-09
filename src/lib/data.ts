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
    url: 'https://d2qsan2ut81n2k.cloudfront.net/live/20446f64-67d8-4100-8c4b-20a759a8e919/medialist_5900814650867226228_hls.m3u8',
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    url: 'https://live.eu-north-1b.cf.dmcdn.net/sec2(n6jEIPfSOvZmJ2-yYLS0kmXzMMXRXGnw7tFCkuePCdw4fOmmnhWPvIe3O8S94cPEKxV5sygwZ1S8HJlSf1NHCgdhXQOJNsWf4CH1yFxfpt11Teh1ZcW0lrbI11THBSSz)/dm/3/x9oda6c/s/live-380.m3u8',
  },
  {
    id: 'atb',
    name: 'ATB',
    url: 'https://live.eu-north-1a.cf.dmcdn.net/sec2(er5m0b6hzAJgxvv3cNYIfI_MfVIguVj23tt5glF_OmYdeBmJt-E6Hnoz_PaTcWM3AXB62uyafcSAAJ03Fm3XXJKdr1Qw-zuDhvJ9TsrO9BOdg_kYTVMR941qbbZdrXBe)/dm/3/x84eirw/s/live-480.m3u8',
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
    id: 'red-uno',
    name: 'Red Uno',
    url: 'https://live.eu-north-1b.cf.dmcdn.net/sec2(KbPOnoCP-YPmQ8JKlIAttzlMs478p9P1YwogPjmX1n5RJOzRwEaAXUExWdObp8ey3319VedeE-F-Mn-TaLLnWjyDpUOTM2vwgChrHw1UxAq3IlAMHdMOhIN2kpC3Zxem)/dm/3/x9mmebq/d/live-720.m3u8',
  },
  {
    id: 'cadena-a',
    name: 'Cadena A',
    url: 'https://5fe2654d6127d.streamlock.net/cadenaa/videocadenaa/playlist.m3u8',
  }
];
