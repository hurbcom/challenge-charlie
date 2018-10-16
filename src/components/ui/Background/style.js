import styled from 'styled-components';


const Background = styled.div`
  background-size: cover;
  background-image: url('${({ image }) => image}');
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;


export default Background;
