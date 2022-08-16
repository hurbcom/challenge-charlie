import styled from 'styled-components';

export const Styles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right, rgb(243 187 0 / 75%), rgb(243 187 0 / 40%));
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
      align-items: center;
      @media only screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
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
