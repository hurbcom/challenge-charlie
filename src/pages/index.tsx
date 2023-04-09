import { HttpResponse } from "@/data/http/http-client"
import { bingImageModel } from "@/domain/models/bing-image-model"
import { RemoteGetImageBing } from "@/useCases/remote-get-image-bing"

type Props = {
    data: HttpResponse<bingImageModel>
}

export default function Home(props: Props) {
    console.log(props.data)

    return (
        <h1 className="text-blue-700">Hello world Hurb :D</h1>
    )
}

export async function getServerSideProps() {

    const bingClient = new RemoteGetImageBing()
    const data = await bingClient.get()

    return {
        props: {
            data
        }
    }
}