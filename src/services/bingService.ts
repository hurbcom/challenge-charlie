class BingService {
  public static getImageFromBing = async () => {
    try {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
      )
      const { images } = await response.json()
      return images[0].url
    } catch (err) {
      console.error(err)
    }
  }
}

export default BingService
