import ApiHelper from '@/helper/ApiHelper'

export const BING_URL = 'https://bing.com'
const PROXY_API = `http://andersonsoares.net.br/curl.php`
const BING_URL_API_IMAGEM = `${BING_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`

export default {
  obterUrlImagemAleatoria () {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await ApiHelper.get(`${PROXY_API}`, {
          url: encodeURI(BING_URL_API_IMAGEM)
        })

        const imagens = data.images
        resolve(`${BING_URL}${imagens[0].url}`)
      } catch (error) {
        reject(error)
      }
    })
  }
}
