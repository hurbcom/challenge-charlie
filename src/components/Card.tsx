
import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import ToggleText from './ToggleText'
import { WeatherData } from '@/domain/models/weather'
import fahrenheitToCelsius from '@/utils/convertTemp'
import Spinner from './Spinner'
import getColor from '@/utils/getColor'
import getDirections from '@/utils/getDirections'
import Image from 'next/image'
import { HomeState } from '@/pages'

type Props = {
    data: WeatherData
    setState: Dispatch<SetStateAction<HomeState>>
    search: string
    loading: boolean
}

const Card = ({ data, setState, search, loading }: Props) => {

    const [cityName, setCityName] = useState(search)

    const temp = useMemo(() => {
        return {
            first: {
                tempF: data?.current.temp.toFixed(),
                tempC: fahrenheitToCelsius(data?.current.temp || 0),
                windSpeed: (data?.current.wind_speed * 3.6).toFixed(2),
                windAngle: getDirections(data.current.wind_deg),
                pressure: data?.current.pressure,
                humidity: data?.current.humidity,
                climate: data?.current.weather[0].main,
                color: getColor(parseInt(data?.current.temp.toFixed())),
                desc: data.current.weather[0].description,
                icon: data.current.weather[0].icon
            },
            second: {
                tempF: parseInt(data.daily[2].temp.day.toFixed()),
                tempC: fahrenheitToCelsius(data.daily[2].temp.day || 0),
                color: getColor(parseInt(data.daily[2].temp.day.toFixed()))
            },
            third: {
                tempF: parseInt(data.daily[3].temp.day.toFixed()),
                tempC: fahrenheitToCelsius(data?.daily[3].temp.day || 0),
                color: getColor(parseInt(data.daily[3].temp.day.toFixed()))
            }
        }
    }, [data])
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setState((old: HomeState) => ({ ...old, citySearch: cityName }))
    }

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleSearch} className="flex w-full bg-white p-2 px-4 items-center gap-4">
                <span data-icon="(" className="icon text-2xl text-slate-500"></span>
                <input
                    value={cityName}
                    className="w-full bg-white h-12 outline-none font-bold text-slate-500"
                    onChange={e => setCityName(e.target.value)}
                />
                <button type="submit" disabled={cityName === '' ? true : false}>
                    <AiOutlineSearch className="w-8 h-8 cursor-pointer text-slate-500" />
                </button>
            </form>
            {loading && <Spinner />}
            {data &&
                <>
                    <div
                        className={`flex w-full justify-center py-8 items-center card first ${temp.first.color}`}
                    >
                        <div className='w-1/2 flex justify-center items center'>
                            <Image
                                width={108}
                                height={108}
                                className='bg-[rgba(255,255,255,0.1)] border-4 border-dotted border-[rgba(255,255,255,0.2)] rounded-2xl'
                                src={`https://openweathermap.org/img/wn/${temp.first.icon}@2x.png`}
                                alt={`representação gráfica da condição climatica %${temp.first.desc}`}
                            />
                        </div>
                        <div className="w-1/2">
                            <p className="text-white text-lg font-semibold">HOJE</p>
                            <ToggleText first={`${temp.first.tempC}°C`} second={`${temp.first.tempF}°F`} />
                            <p className="text-white text-xl font-semibold my-4 uppercase">{temp.first.desc}</p>
                            <p className="text-white font-medium">Vento: {temp.first.windAngle} {temp.first.windSpeed} km/h</p>
                            <p className="text-white font-medium">Humidade: {temp.first.humidity}%</p>
                            <p className="text-white font-medium">Pressão: {temp.first.pressure}hPA</p>
                        </div>
                    </div>
                    <div
                        className={`flex w-full h-16 flex-col items-end justify-center card second ${temp.second.color}`}
                    >
                        <div className="w-1/2 text-white">
                            <p className="text-white font-medium">AMANHÃ</p>
                            <ToggleText first={`${temp.second.tempC}°C`} second={`${temp.second.tempF}°F`} />
                        </div>
                    </div>
                    <div
                        className={`flex w-full h-16 flex-col items-end justify-center card third ${temp.third.color}`}
                    >
                        <div className="w-1/2 text-white">
                            <p className="text-white font-medium">DEPOIS DE AMANHÃ</p>
                            <ToggleText first={`${temp.third.tempC}°C`} second={`${temp.third.tempF}°F`} />
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Card