import styled from 'styled-components';


const Background = styled.div`
  background-image: url('${({ image }) => image}');
  height: 100%;
  width: 100%;
`;


export default Background;
