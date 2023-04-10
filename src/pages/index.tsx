import { HttpResponse } from "@/data/http/http-client"
import { bingImageModel } from "@/domain/models/bing-image-model"
import { RemoteGetImageBing } from "@/useCases/remote-get-image-bing"
import { useEffect, useState } from "react"
import { toast } from 'react-hot-toast'

type Props = {
    bingApi: HttpResponse<bingImageModel>
}

type StateProps = {
    bingApi: HttpResponse<bingImageModel>
}
export default function Home({ bingApi }: Props) {
    const [state, setState] = useState<StateProps>({
        bingApi: {
            body: {
                images: [{
                    url: '/th?id=OHR.LithuanianEggs_PT-BR5718719505_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: "Uma exibição de Páscoa deliciosamente ornamentada"
                }]
            },
            statusCode: 200
        }
    })

    useEffect(() => {
        if (bingApi.error) {
            toast.error(bingApi.error)
            toast.error('Não foi possivel recuperar a imagem de fundo, uma imagem template será exibida até o proximo sucesso!')
        } else {
            setState(old => ({ ...old, bingApi: bingApi }))
        }
    }, [])

    console.log(state)

    const bgImg = `https://www.bing.com${state?.bingApi.body?.images[0].url}`

    return (
        <div
            className={`w-full h-screen flex justify-center items-center`}
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <h1 className="text-blue-700">Hello world Hurb :D</h1>
        </div>
    )
}

export async function getServerSideProps() {

    const bingClient = new RemoteGetImageBing()
    const bingApi = await bingClient.get()

    return {
        props: {
            bingApi
        }
    }
}