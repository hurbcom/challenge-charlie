import { AiOutlineSearch } from 'react-icons/ai'
import ToggleText from './ToggleText'


const Card = () => {
    return (
        <div className="w-full max-w-md">
            <form onSubmit={() => console.log('teste')} className="flex w-full bg-white p-2 px-4 items-center gap-4">
                <span data-icon="(" className="icon text-2xl text-slate-500"></span>
                <input className="w-full bg-white h-12 outline-none font-bold text-slate-500" />
                <button type="submit">
                    <AiOutlineSearch className="w-8 h-8 cursor-pointer text-slate-500" />
                </button>
            </form>
            <div className="flex w-full justify-center py-8 bg-yellow-500 items-center card">
                <span data-icon="B" className="icon text-9xl text-white w-1/2 text-center"></span>
                <div className="w-1/2">
                    <p className="text-white text-lg font-semibold">HOJE</p>
                    <ToggleText first='32°C' second='128°F' />
                    <p className="text-white text-xl font-semibold my-4">ENSOLARADO</p>
                    <p className="text-white font-medium">Vento: NO 6.4km/h</p>
                    <p className="text-white font-medium">Humidade: 78%</p>
                    <p className="text-white font-medium">Pressão: 100 3hPA</p>
                </div>
            </div>
            <div className="flex w-full h-16 bg-yellow-400 flex-col items-end justify-center card">
                <div className="w-1/2 text-white">
                    <p className="text-white font-medium">AMANHÃ</p>
                    <ToggleText first='32°C' second='128°F' />
                </div>
            </div>
            <div className="flex w-full h-16 bg-yellow-700 flex-col items-end justify-center card">
                <div className="w-1/2 text-white">
                    <p className="text-white font-medium">DEPOIS DE AMANHÃ</p>
                    <ToggleText first='32°C' second='128°F' />
                </div>
            </div>
        </div>
    )
}

export default Card