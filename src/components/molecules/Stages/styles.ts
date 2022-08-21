import styled from 'styled-components';

export const Styles = {
  Container: styled.div``,
  CurrentLocation: styled.div<{ loading?: boolean | number }>`
    height: ${({ loading }) => (loading ? '0px' : '40px')};
    opacity: ${({ loading }) => (loading ? '0' : '1')};
    background: rgb(255 255 255 / 85%);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    padding: 0 28px;
    transition: all ease 0.4s;
  `,
};
