import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useMemo } from 'react';
import './temperature.scss';

function Temperature({ temperature, bigNumber = false }) {
    const { showCelsius } = useStoreState((state) => state);
    const { setShowCelsius } = useStoreActions((actions) => actions);

    const fahrenheit = useMemo(() =>
        temperature * (9 / 5) + 32
    , [temperature])

    return (
        <div className='temperature'>
            { temperature && (
                <div
                    title={showCelsius ? 'Mudar para Fahrenheit' : 'Mudar para Celsius'}
                    role="button"
                    className={bigNumber ? "bigNumber" : "numbers"}
                    onClick={() => setShowCelsius(!showCelsius)}>
                        { showCelsius ?
                            `${Math.round(temperature)}ºC` :
                            `${Math.round(fahrenheit)}ºF`
                        }
                </div>
            )}
        </div>
    );
}


export default Temperature;
