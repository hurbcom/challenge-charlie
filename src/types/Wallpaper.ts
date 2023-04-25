export type WallpaperToBingAPIData = {
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
  tooltips: {
    loading: string
    previous: string
    next: string
    walle: string
    walls: string
  }
}

export type WallpaperData = {
  image: string
  title: string
}
