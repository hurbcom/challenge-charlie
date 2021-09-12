import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 32px 8px 20px;
  align-items: center;
  color: #FFF;
  border-radius: 4px;

  div{
    min-width: 180px;
  }

  p{
    font-size: 16px;
  }

  i{
    font-size: 44px;
  }
`;

export default Box;