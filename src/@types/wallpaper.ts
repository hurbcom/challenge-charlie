export type BingWallpaperData = {
  images: [
    {
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
      hs: []
    },
  ]
}

export type WallpaperData = {
  image: string
  title: string
}
