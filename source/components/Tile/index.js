import style from './style.css';
import React from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div className={style.tile}
                style={{
                    backgroundColor: this.props.color,
                }}>
                <div className={style.tileContent}>
                    <div className={style.day}>
                        {this.props.day}
                    </div>
                    <div className={style.temperature}>
                        {this.props.temperature}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tile;
