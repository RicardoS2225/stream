import type { Channel } from '../types';

// URLs originales
const bolivisionLpzHdUrl = 'https://d2qsan2ut81n2k.cloudfront.net/live/20446f64-67d8-4100-8c4b-20a759a8e919/medialist_15609871089997455276_hls.m3u8';
const bolivisionSczHdUrl = 'https://d2qsan2ut81n2k.cloudfront.net/live/3338960e-86ca-4c50-a567-913c663b26fc/medialist_4276517416086298479_hls.m3u8';
const bolivisionLpzSdUrl = 'https://d3ew2cr4djta2j.cloudfront.net/480p.m3u8';
const bolivisionSczSdUrl = 'https://d2e599a9ekjlc5.cloudfront.net/480p.m3u8';


export const bolivisionChannels: Channel[] = [
  {
    id: 'bolivision-lpz-hd',
    name: 'Bolivisión La Paz HD',
    url: `/api/proxy?url=${encodeURIComponent(bolivisionLpzHdUrl)}`,
  },
  {
    id: 'bolivision-scz-hd',
    name: 'Bolivisión Santa Cruz HD',
    url: `/api/proxy?url=${encodeURIComponent(bolivisionSczHdUrl)}`,
  },
  {
    id: 'bolivision-lpz-sd',
    name: 'Bolivisión La Paz SD',
    url: `/api/proxy?url=${encodeURIComponent(bolivisionLpzSdUrl)}`,
  },
  {
    id: 'bolivision-scz-sd',
    name: 'Bolivisión Santa Cruz SD',
    url: `/api/proxy?url=${encodeURIComponent(bolivisionSczSdUrl)}`,
  },
];
