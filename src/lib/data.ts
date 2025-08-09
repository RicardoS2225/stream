import type { Channel } from './types';

// URLs de transmisión verificadas y actualizadas para máxima estabilidad.
export const channels: Channel[] = [
  {
    id: 'unitel',
    name: 'Unitel',
    // URL del reproductor de Dailymotion. El proxy se encargará del Referer.
    url: 'https://www.dailymotion.com/embed/video/k3QyTfbsf232A4A0OkG',
  },
  {
    id: 'bolivision',
    name: 'Bolivisión',
    // URL directa del stream. El proxy se encargará del Referer.
    url: 'https://live.bolivision.com/live/20446f64-67d8-4100-8c4b-20a759a8e919/live.m3u8',
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    // Stream público, no necesita proxy pero lo pasamos por ahí por consistencia.
    url: 'https://streaming.boliviatv.bo/live/live.m3u8',
  },
  {
    id: 'atb',
    name: 'ATB',
    // URL directa del stream. El proxy se encargará del Referer.
    url: 'https://live.atb.com.bo/live/live.m3u8',
  },
  {
    id: 'red-pat',
    name: 'Red PAT',
    // Stream público.
    url: 'https://www.redpat.tv/proxylpz/index.m3u8',
  },
  {
    id: 'abya-yala',
    name: 'Abya Yala TV',
    // Stream público.
    url: 'https://seo.tv.bo/tv/XLIpSEO-TV-8.m3u8',
  },
  {
    id: 'rtp',
    name: 'RTP',
    // Stream público.
    url: 'https://rtp.noxun.net/hls/stream.m3u8',
  },
  {
    id: 'red-uno',
    name: 'Red Uno',
    // URL directa del stream. El proxy se encargará del Referer.
    url: 'https://live.reduno.com.bo/live/live.m3u8',
  },
  {
    id: 'cadena-a',
    name: 'Cadena A',
    // URL directa del stream. El proxy se encargará del Referer.
    url: 'https://5fe2654d6127d.streamlock.net/cadenaa/videocadenaa/playlist.m3u8',
  },
];
