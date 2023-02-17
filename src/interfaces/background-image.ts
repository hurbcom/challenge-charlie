export interface IBackgroundImage {
  url: string
  attribution: string
}

export interface IBackgroundImageApiResponse {
  images: Array<{
    url: string
    copyright: string
  }>
}
