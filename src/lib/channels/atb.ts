import type { Channel } from '../types';

const atbBoliviaUrl = 'https://live.eu-north-1a.cf.dmcdn.net/sec2(cdyUusYk2-R9gx_JHakyw0-XKONn39Qv1236Mi3UFhshiuIIlj40z8e3Y9WZ6-qrDzDqJbauVmQ-1yy55BDMhFYjlyFy-_fbDu156YsxVx7EekRMLEnijvLWevh4thJy)/dm/3/x84eirw/s/live-480.m3u8';

export const atbChannels: Channel[] = [
  {
    id: 'atb-bolivia',
    name: 'ATB Bolivia',
    url: atbBoliviaUrl,
  },
  {
    id: 'atb-movil',
    name: 'ATB Movil',
    url: 'https://streamer04.digital.com.bo/session/aae5187c-74d8-11f0-9524-00505683ffaa$h1.0$default/2ap337/__cl/cg:sworigin2/__c/ATB/__op/hls-default/__f/13/video_400000/index.m3u8',
    logo: 'https://i.postimg.cc/CLfjYr5X/ATB-MOVIL-HD.jpg',
  },
  {
    id: 'atb-scz',
    name: 'ATB Santa Cruz',
    url: 'https://live.eu-north-1a.cf.dmcdn.net/sec2(GKZv0cU6isPoZCYSzZSEgGKeqkdB9mTJjtx1awrLiyEeW_x_W2JarpbN2hA1Gu6kETyEg868XD8e2uGgvcypMo6wbozALikc6IW-n5kPW9zsM9gbHuxroT8y0fHqquU9)/dm/3/x84eirw/s/live-380.m3u8',
  },
];
