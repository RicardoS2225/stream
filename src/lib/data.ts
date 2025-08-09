import type { Channel } from './types';

// URLs de los streams de video directos.
// El proxy se encargará de añadir los 'Referers' necesarios.
export const channels: Channel[] = [
  {
    id: 'unitel',
    name: 'Unitel',
    url: 'https://streamer01.digital.com.bo/session/c9cef0bc-74cb-11f0-9524-00505683ffaa$h1.0$default/2ap337/__cl/cg:sworigin2/__c/REDUNO/__op/hls-default/__f/14/audio_esp/index.m3u8',
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
