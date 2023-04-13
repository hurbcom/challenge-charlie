import { BiErrorAlt } from 'react-icons/bi'

const Error = ({ error, reload }: { error: string, reload: () => void }) => {

    return (
        <div className="absolute w-full h-screen flex justify-center items-center top-0 left-0 bg-[rgba(0,0,0,0.8)]">
            <div className="w-fit rounded-lg shadow-2xl bg-slate-100 flex justify-center items-center flex-col gap-4">
                <div className='h-32 bg-red-500 w-full rounded-tr-lg rounded-tl-lg flex justify-center items-center'>
                    <BiErrorAlt className='w-16 h-16 text-white' />
                </div>
                <div className='px-8 pb-4 flex flex-col justify-center item-center gap-4 w-full'>
                    <h3 className="text-center text-red-500 font-bold">{error}</h3>
                    <button className="m-auto w-1/2 h-8 text-center text-white rounded-md bg-yellow-600 hover:bg-yellow-700" onClick={reload}>Recarregar</button>
                </div>
            </div>
        </div>
    )

}

export default Error