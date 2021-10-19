import { ImageApi } from '../services/api/image'
import Image from 'next/image'

interface Props {
  imageBackground: string
}
const HomePage = ({ imageBackground }: Props) => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className="w-full max-w-7xl relative">
          <Image
            objectFit="cover"
            layout="fill"
            src={imageBackground}
            alt="Imagem de fundo da previsão do tempo"
          />
          <div className="relative flex flex-col items-center h-screen w-full justify-center">
            <div className="w-full h-full max-w-xl">
              <div className="bg-white opacity-50">
                <div className="w-full text-4xl font-medium text-gray-700 p-4">
                  Rio de Janeiro, Rio de Janeiro
                </div>
              </div>
              <div className="bg-yellow-200 opacity-50 p-4 grid grid-cols-12 text-white">
                <div className="col-span-8">Tempo</div>
                <div className="col-span-4">Tempo</div>
              </div>
              <div className="bg-yellow-300 opacity-50 p-4 grid grid-cols-12 text-white">
                <div className="col-span-8">
                  <span className="opacity-100">Amanhã</span>
                </div>
                <div className="col-span-4">Amanhã</div>
              </div>
              <div className="bg-yellow-400 opacity-50 p-4 grid grid-cols-12 text-white">
                <div className="col-span-8">Depois Amanhã</div>
                <div className="col-span-4">Depois Amanhã</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await ImageApi.getImageBackground({
      format: 'js',
      idx: 0,
      mkt: 'pt-BR',
      n: 1
    })
    if (!res.data.images[0]?.url) {
      return {
        props: {
          imageBackground: '/assets/images/image-background.jpg'
        }
      }
    }
    return {
      props: {
        imageBackground: process.env.APi_URL_IMAGE + res.data.images[0].url
      }
    }
  } catch (error) {
    return {
      props: {
        imageBackground: '/assets/images/image-background.jpg'
      }
    }
  }
}

export default HomePage
