import type { Channel } from './types';

// URLs de los streams de video directos.
// El proxy se encargará de añadir los 'Referers' necesarios.
export const channels: Channel[] = [
  {
    id: 'unitel',
    name: 'Unitel',
    url: 'https://mdstrm.com/live-stream-playlist/5744c88798b7a94361567035.m3u8',
  },
  {
    id: 'bolivision',
    name: 'Bolivisión',
    url: 'https://stream.lgs.dev/bolivision/master.m3u8',
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    url: 'https://streaming.boliviatv.bo/live/live.m3u8',
  },
  {
    id: 'atb',
    name: 'ATB',
    url: 'https://stream.lgs.dev/atb/master.m3u8',
  },
  {
    id: 'red-pat',
    name: 'Red PAT',
    url: 'https://www.redpat.tv/proxylpz/index.m3u8',
  },
  {
    id: 'abya-yala',
    name: 'Abya Yala TV',
    url: 'about:blank',
  },
  {
    id: 'rtp',
    name: 'RTP',
    url: 'https://rtp.noxun.net/hls/stream.m3u8',
  },
  {
    id: 'red-uno',
    name: 'Red Uno',
    url: 'https://stream.lgs.dev/reduno/master.m3u8',
  },
  {
    id: 'cadena-a',
    name: 'Cadena A',
    url: 'https://stream.lgs.dev/cadenaa/master.m3u8',
  },
];
