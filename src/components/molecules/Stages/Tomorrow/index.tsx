import React, { FC } from 'react';
import { Icon, Temperature } from 'atoms';
import sources from '../../../atoms/Icon/sources';
import { ScaleEnum, TWeatherEnum } from '../types';
import { TWeatherTypes } from '../Today/types';
import { Styles } from './styles';

interface ITomorrow {
  loading: boolean;
  weatherColor?: TWeatherEnum;
  onChangeScale?: () => void;
  weatherType?: TWeatherTypes;
  scale?: ScaleEnum;
  max: number;
  min: number;
}

const Tomorrow: FC<ITomorrow> = ({
  loading,
  weatherColor,
  scale,
  weatherType,
  onChangeScale,
  max,
  min,
}) => {
  const iconName = weatherType as keyof typeof sources;

  return (
    <Styles.Container weatherColor={weatherColor}>
      <div className='icon'>{iconName && <Icon name={iconName} color='white' size={60} />}</div>

      <div className='content'>
        <Styles.Title>Amanhã</Styles.Title>

        {loading ? (
          <Icon name='loading' size={40} color='white' />
        ) : (
          <div className='temperature'>
            <Styles.Element>
              <Temperature temp={min} onChangeScale={onChangeScale} scale={scale} />

              <Styles.Label>min</Styles.Label>
            </Styles.Element>

            <div className='pipe'></div>

            <Styles.Element>
              <Temperature temp={max} onChangeScale={onChangeScale} scale={scale} />

              <Styles.Label>max</Styles.Label>
            </Styles.Element>
          </div>
        )}
      </div>
    </Styles.Container>
  );
};

export default Tomorrow;
