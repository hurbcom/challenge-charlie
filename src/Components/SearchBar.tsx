import React, { useEffect, useState } from "react"

let timeout: any

function SearchBar({ onSearch }: any, ref: React.ForwardedRef<any>) {
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (onSearch) {
                onSearch(inputValue)
            }
        }, 250);

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [inputValue, onSearch])

    return (
        <input
            ref={ref}
            value={inputValue}
            type="text"
            onChange={e => {
                setInputValue(e.target.value)
            }}
        />
    )
}

export default React.forwardRef(SearchBar)