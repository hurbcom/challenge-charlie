import axios from "axios"

const baseUrl = 'https://www.bing.com'
const url = 'HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'

export const getBackgroundImage = async () => {
    const { data } = await axios.get(url)
    const { images } = data
    const imgUrl = baseUrl + images[0].url

    return imgUrl
}