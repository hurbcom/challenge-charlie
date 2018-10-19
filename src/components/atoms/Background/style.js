import styled from 'styled-components';


const Background = styled.div`
  background-color: #fff;
  background-image: url('${({ image }) => image}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;


export default Background;
