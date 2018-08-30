import React from 'react';

import './index.css';

const SearchBar = props => {
    return <input type="text" onChange={props.change} value={props.location} />;
};

export default SearchBar;
