export interface Image {
  startdate: string
  fullstartdate: string
  enddate: string
  url: string
  urlbase: string
  copyright: string
  copyrightlink: string
  title: string
  quiz: string
  wp: boolean
  hsh: string
  drk: number
  top: number
  bot: number
  hs: any[]
}

export interface Tooltips {
  loading: string
  previous: string
  next: string
  walle: string
  walls: string
}

export interface ImageBackound {
  images: Image[]
  tooltips: Tooltips
}

export interface PropsImageBackground {
  format: 'js'
  idx: number
  mkt: 'pt-BR'
  n: number
}
