import { useEffect, useState } from "react"

let timeout: any

function SearchBar({ onSearch }: any) {
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (onSearch) {
                onSearch(inputValue)
            }
        }, 500);

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [inputValue])

    return (
        <input
            value={inputValue}
            type="text"
            onChange={e => {
                setInputValue(e.target.value)
            }}
        />
    )
}

export default SearchBar