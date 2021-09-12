import styled from 'styled-components';

const BigBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #FFF;
  padding: 20px 32px 32px 20px;
  margin: 16px 0;

  div{
    min-width: 180px;
  }

  h3{
    margin: 8px 0;
  }

  i{
    font-size: 100px;

    @media screen and (max-width: 370px) {
      font-size: 66px;
    }
  }
`;

export default BigBox;