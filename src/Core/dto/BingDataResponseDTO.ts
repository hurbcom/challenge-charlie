export interface BingDataResponseDTO {
 images: Image[]
 tooltips: Tooltip
}

interface Image {
  bot: number
  copyright: string
  copyrightlink: string
  drk: number
  enddate: string
  fullstartdate: string
  hs: string[]
  hsh: string
  quiz: string
  startdate: string
  title: string
  top: number
  url: string
  urlbase: string
  wp: true
}

interface Tooltip {
  loading: string
  next: string
  previous: string
  walle: string
  walls: string
}
