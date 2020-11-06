export interface IBingImage {
  images: IImage[];
  tooltips: ITooltips;
}

export interface IImage {
  bot: number;
  copyright: string;
  copyrightlink: string;
  drk: number;
  enddate: string;
  fullstartdate: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  hs: any[];
  hsh: string;
  quiz: string;
  startdate: string;
  title: string;
  top: number;
  url: string;
  urlbase: string;
  wp: boolean;
}

export interface ITooltips {
  loading: string;
  next: string;
  previous: string;
  walle: string;
  walls: string;
}
