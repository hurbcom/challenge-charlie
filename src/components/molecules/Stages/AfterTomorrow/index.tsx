import React from 'react';
import { Icon, Temperature } from 'atoms';
import styled from 'styled-components';

const Styles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right, rgb(243 187 0 / 50%), rgb(243 187 0 / 20%));
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    height: 100px;
    padding: 0 28px;

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      @media only screen and (min-width: 768px) {
        flex-direction: row;
      }

      .temperature {
        display: flex;

        .pipe {
          border-right: 1px solid rgb(255 255 255 / 60%);
          margin: 0 28px;
        }
      }
    }

    .icon {
      min-width: 100px;
      margin-right: 20px;
      opacity: 0.7;
      display: none;

      @media only screen and (min-width: 768px) {
        display: block;
      }

      > div {
        position: absolute;
        top: -10px;
        left: -10px;
      }
    }
  `,
  Title: styled.h2`
    font-size: 18px;
    font-weight: 200;
    margin: 0;
    color: #fff;
  `,
  Element: styled.div`
    display: flex;
    align-items: center;
  `,
  Label: styled.div`
    font-size: 10px;
    background-color: #fff;
    padding: 1px 5px;
    border-radius: 8px;
    margin-left: 10px;
  `,
};

const AfterTomorrow = () => {
  return (
    <Styles.Container>
      <div className='icon'>
        <Icon name='sun-clouds' color='white' size={100} />
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
