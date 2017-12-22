import style from './style.css';
import React from 'react';

import Autocomplete from 'react-autocomplete';

const menuStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'left',
    cursor: 'pointer',
    position: 'fixed',
};

class LocationInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <div className={style.autocomplete}>
                <Autocomplete
                    menuStyle={menuStyle}
                    items={[
                        { id: 1, label: 'Rio de Janeiro, Rio de Janeiro' },
                        { id: 2, label: 'São Paulo, São Paulo' },
                        { id: 3, label: 'Belo Horizonte, Minas Gerais' },
                    ]}
                    shouldItemRender={
                        (item, value) => item.label
                            .toLowerCase().indexOf(value.toLowerCase()) > -1
                    }
                    getItemValue={(item) => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                        key={item.id}
                        style={{
                        backgroundColor: highlighted ? '#eee' : 'transparent',
                        }}>
                            {item.label}
                        </div>
                    }
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                    onSelect={(value) => this.setState({ value })}
                    />
            </div>
        );
    }
}

export default LocationInput;
