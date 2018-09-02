import React from 'react';
import './index.css';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <span className="search-bar__image" />
            <input
                type="text"
                onChange={props.change}
                value={props.location}
                className="search-bar__input"
            />
        </div>
    );
};

export default SearchBar;
