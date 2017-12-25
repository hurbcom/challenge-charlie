import style from './style.css';
import React from 'react';

class Tile extends React.Component {
    render() {
        if (this.props.loading) {
            return <div className={style.loadingTile}></div>;
        }
        return (
            <div className={style.tile}
                style={{
                    backgroundColor: this.props.color,
                }}>
                <div className={style.tileContent}>
                    <div className={style.day}>
                        {this.props.day}
                    </div>
                    <div
                        className={style.temperature}
                        onClick={this.props.changeTemperatureUnit}>
                        {this.props.temperature}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tile;
