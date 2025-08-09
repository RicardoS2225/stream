import type { Channel } from './types';

// Sample M3U8 stream. Replace with your actual stream URLs.
const sampleStream = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

export const channels: Channel[] = [
  {
    id: 'unitel',
    name: 'Unitel',
    url: 'https://unitel-bo-movil.red5.stream/live/stream.m3u8',
  },
  {
    id: 'bolivision',
    name: 'Bolivisión',
    url: 'https://live.bolivision.com/live/20446f64-67d8-4100-8c4b-20a759a8e919/live.m3u8',
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    url: 'https://streaming.boliviatv.bo/live/live.m3u8',
  },
  {
    id: 'atb',
    name: 'ATB',
    url: 'https://live.atb.com.bo/live/live.m3u8',
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
    url: 'https://live.reduno.com.bo/live/live.m3u8',
  },
  {
    id: 'cadena-a',
    name: 'Cadena A',
    url: 'https://5fe2654d6127d.streamlock.net/cadenaa/videocadenaa/playlist.m3u8',
  }
];
