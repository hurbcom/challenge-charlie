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
    const [state, setState] = useState<StateProps>()

    useEffect(() => {
        if (bingApi.error) {
            toast.error(bingApi.error)
        }
        setState(old => ({ ...old, bingApi: bingApi }))
    }, [])

    console.log(state)
    return (
        <h1 className="text-blue-700">Hello world Hurb :D</h1>
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