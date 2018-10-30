import styled from 'styled-components';


const DataBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 7em;
  width: 100%;
`;

const DataLocationBox = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const IconBox = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  width: 100%;
`;


export {
  DataBox,
  DataLocationBox,
  IconBox,
  Wrapper,
};
