const url = `//cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`

export const getCurrentBackgroundImage = async () => {
    const response = await fetch(url)
    const json = await response.json()

    return `https://www.bing.com/${json.images[0].url}`
}

