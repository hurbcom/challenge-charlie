import React, { useEffect, useState } from 'react';
import { Icons } from '@/components/Icons/icons';

interface SearchProps {
    onSearchChange: (value: string) => void
    location: string | undefined
    loading: boolean
}

function SearchInput(props: SearchProps) {
    const { onSearchChange, location, loading } = props

    const [search, setSearch] = useState('')

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && search.length >= 2) {
            onSearchChange(search)
        }
    }

    const clearInput = () => {
        setSearch('')
    }

    useEffect(() => {
        if (!location) return
        setSearch(location)
    }, [location])

    return (
        <div className='flex w-full max-w-[850px] min-w-[370px] items-center gap-4 h-[90px] md:h-[130px] bg-white bg-opacity-90 px-[1rem] py-[2rem] cursor-pointer drop-shadow' onClick={clearInput}>
            <Icons.compass className={`w-[60px] md:w-[90px] h-auto rotate-90 ${loading ? 'spinner' : ''}`} />
            <input
                type='text'
                className='w-[90%] truncate h-full md:text-[2.2rem] text-[1.6rem] font-bold bg-transparent placeholder:text-[rgb(var(--secondary))] focus:outline-none'
                placeholder={loading ? 'Buscando...' : 'Buscar cidade...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => setSearch(location || '')}
                onKeyDown={handleKeyDown}
                disabled={loading}
            />
        </div>
    )
}

export default SearchInput
