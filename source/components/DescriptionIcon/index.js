import style from './style.css';
import React from 'react';

import icon2 from '../../icons/2.svg';
import icon6 from '../../icons/6.svg';
import icon14 from '../../icons/14.svg';
import icon18 from '../../icons/18.svg';
import icon23 from '../../icons/23.svg';
import icon32 from '../../icons/32.svg';
import icon45 from '../../icons/45.svg';

class DescriptionIcon extends React.Component {
    getIcon() {
        const { weatherType } = this.props;
        const weatherTypeIcons = [
            { icon: icon2, types: [31, 32, 36] },
            { icon: icon6, types: [24] },
            { icon: icon14, types: [26, 28, 30, 34, 44] },
            { icon: icon18,
              types: [3, 4, 6, 11, 12, 45, 35, 37, 38, 39, 40, 47] },
            { icon: icon23,
              types: [5, 7, 8, 9, 10, 13, 14, 15, 16, 41, 42, 43, 46] },
            { icon: icon32, types: [27, 29, 33] },
        ];

        const icon = weatherTypeIcons
            .reduce((prev, curr) => {
                if (curr.types.indexOf(weatherType) !== -1) {
                    return curr.icon;
                }
                return prev;
            }, undefined);
        return icon || icon45;
    }

    render() {
        return (
            <div
                className={style.descriptionIcon}>
                <img src={this.getIcon()} className={style.icon}/>
            </div>
        );
    }
}

export default DescriptionIcon;
