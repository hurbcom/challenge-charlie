import styled from 'styled-components'

export const Wrapper = styled.main`
  background: ${({ bg }) =>
    bg === '#06092b' ? '#06092b' : `url(https://www.bing.com${bg})`};
  background-size: cover;
  background-position: center;
  filter: ${({ bg }) => (bg === '#06092b' ? 'unset' : 'brightness(0.7)')};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
