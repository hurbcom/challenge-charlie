import axios from 'axios';
import { Util, ENV } from '../config';

/**
 *  Realiza a chamada na API
 * @param {*} type 'BING' || 'SEARCH
 * @param {*} params {localname:'Rio de Janeiro', longitude:-43.20981724559929, latitude:-22.924636495949056}
 * @param {*} method GET || POST
 * @returns Promoise<Result>
 */
export const fetch_api = (type, params) => {
    return new Promise( (resolve, reject) => {
      let _opt = {};
      _opt['method'] = 'GET';
      _opt['headers'] = {'content-type': 'application/json', 'x-app-id': ENV.API.HEROKU.APP_ID}; //Enviando a app key para o liberação do acesso no servidor.
      _opt['url'] = ENV.API.HEROKU.DOMAIN + Util.formart(ENV.API.HEROKU[type], params);
      return axios(_opt).then(response => { resolve(response.data); })
                        .catch(error   => { reject(error); });
    });
  }