import React from 'react';
import { Icon, Temperature } from 'atoms';
import { Styles } from './styles';

const Today = () => {
  return (
    <Styles.Container>
      <div className='icon'>
        <Icon name='sun-clouds' color='white' size={110} />
      </div>

      <div className='content'>
        <Styles.Title>Hoje</Styles.Title>

        <div className='values'>
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

          <div className='temperature'>
            <Styles.TextCenter>
              <Styles.Text fontSize='16px'>4 km/h NE</Styles.Text>
              <Styles.Text>Vento</Styles.Text>
            </Styles.TextCenter>

            <div className='pipe'></div>

            <Styles.TextCenter>
              <Styles.Text fontSize='16px'>10%</Styles.Text>
              <Styles.Text>Humidade</Styles.Text>
            </Styles.TextCenter>

            <div className='pipe'></div>

            <Styles.TextCenter>
              <Styles.Text fontSize='16px'>1018hPa</Styles.Text>
              <Styles.Text>Pressão</Styles.Text>
            </Styles.TextCenter>
          </div>
        </div>
      </div>
    </Styles.Container>
  );
};

export default Today;
