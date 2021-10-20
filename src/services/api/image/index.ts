import Axios from 'axios'
import { ImageBackound, PropsImageBackground } from './types'

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_APi_URL_IMAGE
})

const getImageBackground = (params: PropsImageBackground) =>
  api.get<ImageBackound>('HPImageArchive.aspx', { params: params })

export const ImageApi = {
  getImageBackground
}
