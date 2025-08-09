import type { Channel } from './types';

// URLs de los streams de video directos.
export const channels: Channel[] = [
  // --- UNITEL ---
  {
    id: 'unitel-nacional',
    name: 'Unitel Nacional',
    url: 'https://live-b2.cf.dmcdn.net/sec2(SL4d4L-mk2sIWYUmWGyDxhmhyOUtrPOlNVFyY4wBUQdIUwUlx2sppltLU5m4K_sjzr9S1bKlegi_5cPPIN1UayJc3HtOkGKiRTqFnk1bUqRZga2cn86DusBtrffzcaFj)/cloud/3/x7wzxiw/s/live-1080.m3u8',
  },
  {
    id: 'unitel-lpz',
    name: 'Unitel La Paz',
    url: 'https://www.dailymotion.com/video/x7vsfua',
  },
  {
    id: 'unitel-scz',
    name: 'Unitel Santa Cruz',
    url: 'https://www.dailymotion.com/video/x7vsezg',
  },
  {
    id: 'unitel-cbba',
    name: 'Unitel Cochabamba',
    url: 'https://www.dailymotion.com/video/x7y922d',
  },
  // --- RED UNO ---
  {
    id: 'red-uno-lpz',
    name: 'Red Uno La Paz',
    url: 'https://live.eu-north-1b.cf.dmcdn.net/sec2(46J2CAi_YGSroVpnWbl6IO499tZPvU-fmiJAE4WCKGNbgSZSK7jkEUeBcc2OLw4Ko7e7Svf2N6E_u5kV813irnOZUu9mFUL6VPJhacz3ntnd8s3ZnUFrBM_LyRYbkwh6)/dm/3/x9mk120/d/live-720.m3u8',
  },
  {
    id: 'red-uno-scz',
    name: 'Red Uno Santa Cruz',
    url: 'https://live.eu-north-1b.cf.dmcdn.net/sec2(ftCCIQFyQ65_ajfQJIa_c0TKJWO-b6BanPAgnvfjRShoMAF84pfaN5R26WC_E6VgB8QUYnWqVPbJ5TDETa08qWmpB9GeplOMWce6h7GA1e7xS5YkpSpyuHBcIytwALNg)/dm/3/x9ie7h0/d/live-720.m3u8',
  },
  {
    id: 'red-uno-cbba',
    name: 'Red Uno Cochabamba',
    url: 'https://live.eu-north-1a.cf.dmcdn.net/sec2(HzcGBueuwT2pUzo7On8zZ6OkaF_2GOYzy8Q0xP9vlxTrmS2fC8qKaTbK6rfiuhHLGS-3mYxv6dhEBrAMwo12_4YLOwPIBWX81mjPWdItxkAEzH75D326ojdIaUi21x8q)/dm/3/x9mk16k/d/live-720.m3u8',
  },
  // --- ATB ---
  {
    id: 'atb-bolivia',
    name: 'ATB Bolivia',
    url: 'https://live.eu-north-1b.cf.dmcdn.net/sec2(Tx7VK6BMAZ9mpm3vFPTEa7rXWtvpfEGekpZiuf2bazARdMcQdAiLC8mEwYPMn17Gbc41yRONB7whHh8Q1WyEkxl4J-Q628Wg-4yhvNBMXR5tvIRkzsgtwX5eaq6kwYvs)/dm/3/x84eirw/s/live-720.m3u8',
  },
  {
    id: 'atb-movil',
    name: 'ATB Movil',
    url: 'http://186.121.206.197/live/daniel/index.m3u8',
  },
    {
    id: 'atb-scz',
    name: 'ATB Santa Cruz',
    url: 'https://www.dailymotion.com/video/x89sfvo',
  },
  // --- BOLIVISION ---
  {
    id: 'bolivision-lpz-hd',
    name: 'Bolivisión La Paz HD',
    url: 'https://d3ew2cr4djta2j.cloudfront.net/original.m3u8',
  },
  {
    id: 'bolivision-lpz-sd',
    name: 'Bolivisión La Paz SD',
    url: 'https://d3ew2cr4djta2j.cloudfront.net/480p.m3u8',
  },
  {
    id: 'bolivision-scz-hd',
    name: 'Bolivisión Santa Cruz HD',
    url: 'https://d2e599a9ekjlc5.cloudfront.net/original.m3u8',
  },
  {
    id: 'bolivision-scz-sd',
    name: 'Bolivisión Santa Cruz SD',
    url: 'https://d2e599a9ekjlc5.cloudfront.net/480p.m3u8',
  },
  // --- BOLIVIA TV ---
  {
    id: 'bolivia-tv-7-1',
    name: 'Bolivia TV 7.1',
    url: 'https://5fe2654d6127d.streamlock.net/boliviatv/videoboliviatv/chunklist_w1395384263.m3u8',
  },
  {
    id: 'bolivia-tv-7-2',
    name: 'Bolivia TV 7.2',
    url: 'https://5ca3e84a76d30.streamlock.net/boliviatv2/videoboliviatv2/chunklist_w1088797861_vo.m3u8',
  },
    // --- GIGAVISION ---
  {
    id: 'gigavision-lpz',
    name: 'Gigavisión La Paz',
    url: 'https://tv2.bitstreaming.net:3896/multi_web/play_720.m3u8',
  },
  {
    id: 'gigavision-scz',
    name: 'Gigavisión Santa Cruz',
    url: 'https://tv.bitstreaming.net:3348/multi_web/play_720.m3u8',
  },
  // --- PAT ---
  {
    id: 'pat-scz',
    name: 'PAT Santa Cruz',
    url: 'https://w8.redpat.tv:8000/play/110/30354384.m3u8',
  },
  {
    id: 'pat-lpz',
    name: 'PAT La Paz',
    url: 'https://w8.redpat.tv:8000/play/12/89085742.m3u8',
  },
  // --- SEO TV ---
  {
    id: 'seo-tv',
    name: 'SEO TV',
    url: 'https://seo.tv.bo/tv/LIpSEO-TV-1.m3u8',
  },
  {
    id: 'seo-tv-peliculas',
    name: 'SEO TV Peliculas',
    url: 'https://seo.tv.bo/tv/LIpSEO-TV-4.m3u8',
  },
  {
    id: 'seo-tv-novelas',
    name: 'SEO TV Novelas',
    url: 'https://seo.tv.bo/tv/LIpSEO-TV-3.m3u8',
  },
  // --- F10 ---
  {
    id: 'f10-hd',
    name: 'F10 HD',
    url: 'https://tv2.bitstreaming.net:3235/multi_live/play_720.m3u8',
  },
  {
    id: 'f10-sd',
    name: 'F10 SD',
    url: 'https://tv2.bitstreaming.net:3235/multi_live/play_480.m3u8',
  },
    // --- PACEÑISIMA ---
  {
    id: 'pacenisima-tv',
    name: 'Paceñisima TV',
    url: 'https://ssh101stream.ssh101.com/akamaissh101/ssh101/centralptv/chunks.m3u8',
  },
  // --- GOGOPLAY ---
  {
    id: 'gogoplay-tv',
    name: 'GogoPlay TV',
    url: 'https://ssh101stream.ssh101.com/akamaissh101/ssh101/gogoplay/chunks.m3u8',
  },
  // --- ZOY TV ---
  {
    id: 'zoy-tv',
    name: 'ZOY TV',
    url: 'https://ssh101stream.ssh101.com/akamaissh101/ssh101/zoytv/chunks.m3u8',
  },
  {
    id: 'zoy-tv-novelas',
    name: 'ZOY TV Novelas',
    url: 'https://ssh101stream.ssh101.com/akamaissh101/ssh101/zoytvturcas/chunks.m3u8',
  },
  // --- OTROS CANALES ---
  {
    id: 'tdt-multimedia',
    name: 'TDT Multimedia',
    url: 'https://video01.kshost.com.br:4443/juan6318/juan6318/chunklist_w174174801.m3u8',
  },
  {
    id: 'rtp-lpz',
    name: 'RTP La Paz',
    url: 'https://rtp.noxun.net/hls/stream.m3u8',
  },
  {
    id: 'cadena-a',
    name: 'Cadena A',
    url: 'https://5fe2654d6127d.streamlock.net/cadenaa/videocadenaa/chunklist_w1522635208.m3u8',
  },
  {
    id: 'tvu-umsa',
    name: 'TVU UMSA',
    url: 'https://live.enhdtv.com:8081/8190/tracks-v1a1/mono.m3u8',
  },
  {
    id: 'xto-tv',
    name: 'XTO TV',
    url: 'https://614013e273786.streamlock.net/XtoTv/XtoTv/chunklist_w1028738237.m3u8',
  },
  {
    id: 'red-advenir',
    name: 'Red Advenir',
    url: 'https://streamer1.streamhost.org/salive/GMIredadvenirh/chunklist_w1940547209.m3u8',
  },
  {
    id: 'abya-yala',
    name: 'Abya Yala TV',
    url: 'https://seo.tv.bo/tv/LIpSEO-TV-8.m3u8',
  },
  {
    id: 'tv-latina',
    name: 'TV Latina',
    url: 'https://castv10.plugstreaming.com:19360/redtv/1080p.m3u8',
  },
  {
    id: 'delta-tv',
    name: 'Delta TV',
    url: 'https://tv3.bitstreaming.net:3951/multi_live/play_720.m3u8',
  },
  {
    id: 'ceacom-tv',
    name: 'CEACOM TV',
    url: 'https://eu1.servers10.com:8081/ceacom/tracks-v1a1/mono.m3u8',
  },
  {
    id: 'univalle-tv',
    name: 'Univalle TV',
    url: 'https://master.tucableip.com/univalletv/tracks-v1a1/mono.ts.m3u8',
  },
  {
    id: 'cinerama-tv',
    name: 'Cinerama TV',
    url: 'https://owncloud1692001.fasthostunlimited.com/hls/0/stream.m3u8',
  },
  {
    id: 'vtv-tv',
    name: 'VTV',
    url: 'https://solo.disfrutaenlared.com:1936/vtvcanal/vtvcanal/chunklist_w1942409348.m3u8',
  },
  {
    id: 'mega-tv',
    name: 'Mega TV',
    url: 'https://vdo.grupolimalive.com:3688/live/albertlive.m3u8',
  },
  {
    id: 'tele-estrella',
    name: 'Tele Estrella',
    url: 'https://envivo.bolivia-link.com:3785/live/teleestrellalive.m3u8',
  },
  {
    id: 'solidaria-tv',
    name: 'Solidaria TV',
    url: 'https://canadaremar2.todostreaming.es/live/bolivia-stream.m3u8',
  },
  {
    id: 'red-cctv',
    name: 'Red CCTV',
    url: 'https://solo.disfrutaenlared.com:1936/redcctv/redcctv/chunklist_w784645014.m3u8',
  },
  {
    id: 'coral-tv',
    name: 'Coral TV',
    url: 'https://tv.mediacp.eu:8081/coraltv/tracks-v1a1/mono.m3u8',
  },
  {
    id: 'tu-tv',
    name: 'Tu TV',
    url: 'https://solo.disfrutaenlared.com:1936/tutv/tutv/chunklist_w738772203.m3u8',
  },
  {
    id: 'fap-tv',
    name: 'FAP TV',
    url: 'https://envivo.bolivia-link.com:3234/live/faptvlive.m3u8',
  },
  {
    id: 'tva-tv',
    name: 'TVA TV',
    url: 'https://play.agenciastreaming.com:19360/8160/8160.m3u8',
  },
  {
    id: 'imperial-tv',
    name: 'Imperial TV',
    url: 'https://play.agenciastreaming.com:19360/8122/8122.m3u8',
  },
  {
    id: 'in-tv',
    name: 'IN TV',
    url: 'https://envivo.bolivia-link.com:3580/live/intvlive.m3u8',
  },
  {
    id: 'palenque-tv',
    name: 'Palenque TV',
    url: 'https://tv.bitstreaming.net:3234/multi_live/play_720.m3u8',
  },
  {
    id: 'zuraca-tv',
    name: 'Zuraca TV',
    url: 'https://envivo.bolivia-link.com:3099/live/ztvlive.m3u8',
  },
  {
    id: 'amitel-tv',
    name: 'Amitel TV',
    url: 'https://stv.boliviaplay.com.bo/hls/0/stream.m3u8',
  },
  {
    id: 'ctv',
    name: 'CTV',
    url: 'https://live.ctvbolivia.com/hls/ctv.m3u8',
  },
];
