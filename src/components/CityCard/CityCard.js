import React, { Component } from 'react';
import './CityCard.css';

const teste = 13
const teste1a = 35

class CityCard extends Component {

    state = {
        expanded: false,
    }
    

    changeStateHandler = () => {
        this.setState((prevState) => {
            return {expanded: !prevState.expanded};
        });
    }

    render() {
        let amor = `CityCardBox${teste}`
        if (this.state.expanded) {
            amor = `CityCardBox${teste1a}`
        }
        return (
            <div className={amor}>
                <button onClick={() => this.changeStateHandler()}>Mudar state</button>
                {amor}
            </div>
          );
    }
}

export default CityCard;
