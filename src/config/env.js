/** 
 * Arquivo para configurações das váriaveis de ambiente.
 */
const ENV = {
    API: {
        HEROKU:{
            DOMAIN:'http://challenge-hurb.herokuapp.com', // URL responsável pelos serviços.
            APP_ID:'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb', // x-app-id = api key para acesso, deve ser enviado no header da aplicação.
            BING:'/bing', // End point para obter a imagem do dia do Bing.com.
            SEARCH:'/weather?localname={localName}&latitude={latitude}&longitude={longitude}' // End point para realizar a busca por nome ou latitude e longitude.
        }
    }
}

export default ENV;