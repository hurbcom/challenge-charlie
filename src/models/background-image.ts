import { IBackgroundImage } from '@/interfaces'

export class BackgroundImage implements IBackgroundImage {
  url: string
  attribution: string

  constructor({ url, attribution }: IBackgroundImage) {
    this.url = url
    this.attribution = attribution
  }
}
