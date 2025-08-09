import type { Channel } from '../types';
import { unitelChannels } from './unitel';
import { redUnoChannels } from './red-uno';
import { atbChannels } from './atb';
import { bolivisionChannels } from './bolivision';
import { boliviaTvChannels } from './bolivia-tv';
import { patChannels } from './pat';
import { gigavisionChannels } from './gigavision';
import { seoTvChannels } from './seo-tv';
import { f10Channels } from './f10';
import { pacenisimaChannels } from './pacenisima';
import { gogoplayChannels } from './gogoplay';
import { zoyTvChannels } from './zoy-tv';
import { otrosChannels } from './otros';

export const channels: Channel[] = [
  ...unitelChannels,
  ...redUnoChannels,
  ...atbChannels,
  ...bolivisionChannels,
  ...boliviaTvChannels,
  ...patChannels,
  ...gigavisionChannels,
  ...seoTvChannels,
  ...f10Channels,
  ...pacenisimaChannels,
  ...gogoplayChannels,
  ...zoyTvChannels,
  ...otrosChannels,
];
