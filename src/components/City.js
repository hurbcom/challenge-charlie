import React from 'react';

//escrevi dessa forma pois ela e stateless
const City = props => (
    <div className="city">
        <div className="city-icon">
            {'('}
        </div>
        <div className="city-info">
        {
            props.city && <p>{props.city} </p> 
        }
        </div>
        
    </div>
);

export default City;