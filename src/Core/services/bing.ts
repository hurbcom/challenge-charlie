import { BingParser } from '../parsers/Bing'

const { REACT_APP_BING_API_URL } = process.env

export const getBackgroundImageURL = (): Promise<string> =>
  fetch(`${REACT_APP_BING_API_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`)
    .then(res => res.json())
    .then(BingParser)
