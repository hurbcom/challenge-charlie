import styled from 'styled-components';
import Devices from '../../const/responsiveness';
import Colors from '../../const/colors';

export const SearchBarContainer = styled.section`
  display: flex;
  width: 100%;
  height: 150px;
`;

export const FormInput = styled.form`
  width: 100%;
`;

export const SearchBarInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  font-size: 26px;
  padding: 0;
  width: 100%;
  font-family: 'Exo 2', sans-serif;
  font-weight: 300;
  color: ${Colors.GREY};

  @media only screen and (max-width: ${Devices.SMALL_SCREEN}) {
  }

  @media only screen and (min-width: ${Devices.LARGE_SCREEN}) {
    font-size: 36px;
    font-weight: 800;
  }
`;

export const CompassImage = styled.img`
  width: 10%;
  @media only screen and (max-width: ${Devices.LARGE_SCREEN}) {
    color: grey;
    margin: 0 30px;
  }

  @media only screen and (min-width: ${Devices.LARGE_SCREEN}) {
    color: grey;
    margin: 0 50px 0 20px;
  }
`;
