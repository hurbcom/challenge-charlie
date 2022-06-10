
import React, { useState } from "react";
import './style.scss'

const Searcher = props => {

    const {
        onSubmit,
        placeholder,
        defaultPlaceholder,
        clearCurrentValue
    } = props
    
    const [search, setSearch] = useState('')

    const onChangeSearch = (e) => {
        if (e.target.value) {
            setSearch(e.target.value)
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        onSubmit(search)
    }

    const clearInputValue = (e) => {
        e.target.value = ''
    }

    return (
        <div className="searcher-container">
            <div className="searcher-compass-icon">
                <a data-icon="("></a>
            </div>
            <form className="searcher-input-container" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="searcher-input"
                    onChange={onChangeSearch}
                    placeholder={placeholder || defaultPlaceholder}
                    onBlur={(e) => clearCurrentValue ? clearInputValue(e) : null}
                />
            </form>
        </div>
    )
}


export default Searcher