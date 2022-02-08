import styled from 'styled-components'

export const StyledMain = styled.div`
  background-image: ${(props) =>
    props.imageBackground
      ? 'url(data:image/png;base64,' + props.imageBackground + ')'
      : 'unset'};
  background-position: center;
  background-size: cover;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 4px 8px;
  }
`
