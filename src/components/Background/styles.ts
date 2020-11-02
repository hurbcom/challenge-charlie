import styled from 'styled-components'

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 8rem 3rem 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ bg }) =>
      bg === '#06092b' ? '#06092b' : `url(https://www.bing.com${bg})`};
    background-size: cover;
    background-position: center;
    filter: brightness(0.8);
  }

  & > * {
    /* This will make it stack on top of the ::before */
    position: relative;
  }
`
