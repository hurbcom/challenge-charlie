import React, { useEffect, useState } from "react"

let timeout: any

function SearchBar({ onSearch, ...rest }: any, ref: React.ForwardedRef<any>) {
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (onSearch) {
                onSearch(inputValue)
            }
        }, 300);

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue])

    return (
        <input
            ref={ref}
            value={inputValue}
            type="text"
            onChange={e => {
                setInputValue(e.target.value)
            }}
            {...rest}

        />
    )
}

export default React.forwardRef(SearchBar)