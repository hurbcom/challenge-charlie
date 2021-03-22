import React, { useContext } from 'react';
import StatusItem from '../Atons/StatusItem';
import { ThemeContext } from '../Molecules/ThemeContext'

function Status() {
    const { tempStatus } = useContext(ThemeContext);

    return (

        <div className="status">
            {
                tempStatus.map((item, index) =>

                    <StatusItem
                        key={index}
                        classInfo={item.classInfo}
                        name={item.name}
                        info={item.info}
                        type={item.type}
                        unit={item.unit}
                    />
                )
            }
        </div>

    )
}

export default Status;
