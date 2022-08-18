import React from 'react';
import { Icon, Temperature } from 'atoms';
import { Styles } from './styles';

const AfterTomorrow = () => {
  return (
    <Styles.Container>
      <div className='icon'>
        <Icon name='sun-clouds' color='white' size={60} />
      </div>

      <div className='content'>
        <Styles.Title>Depois de Amanhã</Styles.Title>

        <div className='temperature'>
          <Styles.Element>
            <Temperature temp={10} />

            <Styles.Label>min</Styles.Label>
          </Styles.Element>

          <div className='pipe'></div>

          <Styles.Element>
            <Temperature temp={20} />

            <Styles.Label>max</Styles.Label>
          </Styles.Element>
        </div>
      </div>
    </Styles.Container>
  );
};

export default AfterTomorrow;
