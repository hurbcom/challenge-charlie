import styled from 'styled-components'

export const StyledApp = styled.div`
    width: 100%;
    height: 100vh;

    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto auto;

    justify-content: center;

    position: relative;

    color: #fff;

    font-weight: 600;
    font-size:x-large;

    &:after{
      content: "";
      background-image: url(${props => props.bg});
      background-size:cover;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1; 
    }
`;