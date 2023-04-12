import Card from "@/components/Card"
import Error from "@/components/Error"
import Spinner from "@/components/Spinner"
import { HttpResponse } from "@/data/http/http-client"
import { bingImageModel } from "@/domain/models/bing-image-model"
import { CityModel } from "@/domain/models/city"
import { WeatherData } from "@/domain/models/weather"
import useLocalStorage from "@/hooks/useLocalStorage"
import useLocation from "@/hooks/useLocation"
import { RemoteGetImageBing } from "@/useCases/remote-get-image-bing"
import { RemoteGetLocalCity } from "@/useCases/remote-get-local-city"
import { RemoteGetWeather } from "@/useCases/remote-get-weather"
import { useEffect, useState } from "react"
import { toast } from 'react-hot-toast'

type Props = {
    bingApi: HttpResponse<bingImageModel>
}

export type HomeState = {
    bingApi?: HttpResponse<bingImageModel>,
    CityApi?: CityModel
    weatherApi?: WeatherData
    citySearch: string
    loading: boolean
    isError: boolean
    error: string
    reload: boolean
}
export default function Home({ bingApi }: Props) {
    const [state, setState] = useState<HomeState>({
        bingApi: {
            body: {

                images: [{
                    url: '/th?id=OHR.LithuanianEggs_PT-BR5718719505_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: "Uma exibição de Páscoa deliciosamente ornamentada"
                }]
            }
        },
        citySearch: 'São Paulo',
        loading: false,
        isError: false,
        error: '',
        reload: false
    })
    const [cachedLocation, setCachedLocation] = useLocalStorage("location", "");
    const city = new RemoteGetLocalCity()
    const weather = new RemoteGetWeather
    const location = useLocation()

    const handleWeather = (cityName?: string): void => {
        setState(old => ({ ...old, loading: true, reload: false }))
        weather
            .get(cityName || state.citySearch)
            .then(res => {
                setState(old => ({ ...old, weatherApi: res, loading: false, reload: false }))
                console.log(res)
                toast(`A busca retornou: ${res.location}`, {
                    icon: '📍'
                })
            })
            .catch(err => {
                setState(old => ({ ...old, loading: false, isError: true, error: 'A api de consulta climática está temporariamente offiline', reload: false }))
                toast.error('Não foi possível realizar a requisição')
            })
    }

    useEffect(() => {
        setState(old => ({ ...old, loading: true, reload: false }))
        if (bingApi.error) {
            toast.error(bingApi.error)
            toast.error('Não foi possível recuperar a imagem de fundo, uma imagem template será exibida até o proximo sucesso!')
        } else {
            setState(old => ({ ...old, bingApi: bingApi }))
        }
        if (cachedLocation !== "") {
            toast.success('Conseguimos pegar sua localização atual.')
            setState(old => ({ ...old, citySearch: cachedLocation, loading: false, reload: false }))
            handleWeather()
        }
        else if (!location.loading) {
            city
                .get(location)
                .then(res => {
                    setState(old => ({ ...old, citySearch: res.results[0].components.city, loading: false, reload: false }))
                    setCachedLocation(res.results[0].components.city)
                    toast.success('Conseguimos pegar sua localização atual.')
                    handleWeather()
                }
                )
                .catch(err => {
                    setState(old => ({ ...old, loading: false, reload: false }))
                    toast.error('Não foi possível localizar sua cidade atual, iremos usar São Paulo como padrão.')
                })
        } else {
            toast.error('Error: Não foi possível localizar sua cidade atual, iremos usar São Paulo como padrão.')
            handleWeather()
        }

    }, [location.loading])


    const bgImg = `https://www.bing.com${state?.bingApi?.body?.images[0].url}`

    return (
        <div
            className={`w-full h-screen flex justify-center items-center`}
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {state.isError && <Error error={state.error} reload={handleWeather} />}
            {state.loading && <Spinner />}
            {location.loading && <Spinner />}
            {state.weatherApi &&
                <Card data={state.weatherApi} handleSearch={handleWeather} search={state.citySearch} loading={state.loading} />
            }
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