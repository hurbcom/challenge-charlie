import Card from "@/components/Card"
import { HttpResponse } from "@/data/http/http-client"
import { bingImageModel } from "@/domain/models/bing-image-model"
import { CityModel } from "@/domain/models/city"
import { WeatherData } from "@/domain/models/weather"
import useLocation from "@/hooks/useLocation"
import { RemoteGetImageBing } from "@/useCases/remote-get-image-bing"
import { RemoteGetLocalCity } from "@/useCases/remote-get-local-city"
import { RemoteGetWeather } from "@/useCases/remote-get-weather"
import { useEffect, useState } from "react"
import { toast } from 'react-hot-toast'

type Props = {
    bingApi: HttpResponse<bingImageModel>
}

type State = {
    bingApi?: HttpResponse<bingImageModel>,
    CityApi?: HttpResponse<CityModel>
    weatherApi?: HttpResponse<WeatherData>
    citySearch: string
    loading: boolean
}
export default function Home({ bingApi }: Props) {
    const [state, setState] = useState<State>({
        bingApi: {
            body: {
                images: [{
                    url: '/th?id=OHR.LithuanianEggs_PT-BR5718719505_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: "Uma exibição de Páscoa deliciosamente ornamentada"
                }]
            }
        },
        citySearch: 'São Paulo',
        loading: false
    })

    const city = new RemoteGetLocalCity()
    const weather = new RemoteGetWeather
    const location = useLocation()



    useEffect(() => {
        setState(old => ({ ...old, loading: true }))
        if (bingApi.error) {
            toast.error(bingApi.error)
            toast.error('Não foi possível recuperar a imagem de fundo, uma imagem template será exibida até o proximo sucesso!')
        } else {
            setState(old => ({ ...old, bingApi: bingApi }))
        }
        city
            .get(location)
            .then(res =>
                setState(old => ({ ...old, citySearch: res.body.results[0].components.city, loading: false })))
            .catch(err => {
                toast.error(err)
                toast.error('Não foi possível localizar sua cidade atual, iremos usar São Paulo como padrão.')
                setState(old => ({ ...old, loading: false }))
            })
    }, [])

    useEffect(() => {
        setState(old => ({ ...old, loading: true }))
        weather
            .get(state.citySearch)
            .then(res => setState(old => ({ ...old, weatherApi: res, loading: false })))
            .catch(err => {
                console.log(err)
                toast.error('Não foi possível realizar a requisição')
                setState(old => ({ ...old, loading: false }))
            })

    }, [state.citySearch])

    const bgImg = `https://www.bing.com${state?.bingApi?.body?.images[0].url}`

    return (
        <div
            className={`w-full h-screen flex justify-center items-center`}
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <Card data={state.weatherApi?.body} setState={setState} search={state.citySearch} loading={state.loading} />
        </div >
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