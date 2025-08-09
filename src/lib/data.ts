import type { Channel } from './types';

// URLs de los streams de video directos o de los reproductores incrustables.
// Esta es la estrategia más robusta y estable.
export const channels: Channel[] = [
  {
    id: 'unitel',
    name: 'Unitel',
    // Esta es la URL del reproductor embeddable de Dailymotion, que es la más estable.
    // ReactPlayer puede manejarla directamente.
    url: 'https://www.dailymotion.com/embed/video/k3QyTfbsf232A4A0OkG',
  },
  {
    id: 'bolivision',
    name: 'Bolivisión',
    // No hay una URL de stream pública y estable. Se marca como no disponible.
    url: 'about:blank',
  },
  {
    id: 'bolivia-tv',
    name: 'Bolivia TV',
    // URL de stream directo que no requiere proxy.
    url: 'https://streaming.boliviatv.bo/live/live.m3u8',
  },
  {
    id: 'atb',
    name: 'ATB',
    // No hay una URL de stream pública y estable. Se marca como no disponible.
    url: 'about:blank',
  },
  {
    id: 'red-pat',
    name: 'Red PAT',
    // URL de stream directo que no requiere proxy.
    url: 'https://www.redpat.tv/proxylpz/index.m3u8',
  },
  {
    id: 'abya-yala',
    name: 'Abya Yala TV',
    // No hay una URL de stream pública y estable. Se marca como no disponible.
    url: 'about:blank',
  },
  {
    id: 'rtp',
    name: 'RTP',
    // URL de stream directo que no requiere proxy.
    url: 'https://rtp.noxun.net/hls/stream.m3u8',
  },
  {
    id: 'red-uno',
    name: 'Red Uno',
    // No hay una URL de stream pública y estable. Se marca como no disponible.
    url: 'about:blank',
  },
  {
    id: 'cadena-a',
    name: 'Cadena A',
    // No hay una URL de stream pública y estable. Se marca como no disponible.
    url: 'about:blank',
  },
];
