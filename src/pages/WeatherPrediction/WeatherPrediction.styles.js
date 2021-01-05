import styled from 'styled-components';
import Devices from '../../const/responsiveness';
import Colors from '../../const/colors';

const temperatureRangeCodes = {
	COLD: 1,
	AVERAGE: 2,
	HOT: 3
};

export const WeatherPredictionStyle = styled.section`
  height: auto;
  @media only screen and (max-width: ${Devices.SMALL_SCREEN}) {
    width: 100%;
    height: 100px;
  }

  @media only screen and (min-width: ${Devices.LARGE_SCREEN}) {
    width: 55%;
    margin: 0 auto;
    background-color: ${Colors.WHITE};
  }
`;

export const WeatherSection = styled.section`
  background-color: ${(props) => {
		switch (props.bgcolor) {
		case temperatureRangeCodes.COLD:
			switch(props.mode){
			case 'dark':
				return Colors.DARK_BLUE;
			case 'medium':
				return Colors.BLUE;
			case 'light':
				return Colors.LIGHT_BLUE;
			}
			break;
		case temperatureRangeCodes.HOT:
			switch(props.mode){
			case 'dark':
				return Colors.DARK_RED;
			case 'medium':
				return Colors.RED;
			case 'light':
				return Colors.LIGHT_RED;
			}
			break;
		case temperatureRangeCodes.AVERAGE:
			switch(props.mode){
			case 'dark':
				return Colors.DARK_YELLOW;
			case 'medium':
				return Colors.YELLOW;
			case 'light':
				return Colors.LIGHT_YELLOW;
			}
			break;
		}
	}};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;



  @media only screen and (max-width: ${Devices.EXTRA_LARGE_SCREEN}) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const SunIcon = styled.section``;

export const WeatherDetails = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: 100;

  @media only screen and (min-width: ${Devices.EXTRA_LARGE_SCREEN}) {
    margin: 0 auto;
    width: calc(100% - 60%);
  }

  @media only screen and (max-width: ${Devices.EXTRA_LARGE_SCREEN}) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

export const WeatherDetailsTitleWrapper = styled.div`
  margin: 5% 0;
`;

export const WeatherDetailsTitle = styled.h1`
  font-weight: 300;

  @media only screen and (max-width: ${Devices.LARGE_SCREEN}) {
    font-size: 18px;
    text-align: center;
    margin: 15px;
  }

  @media only screen and (min-width: ${Devices.MEDIUM_SCREEN}) and (max-width: ${Devices.LARGE_SCREEN}) {
    font-size: 18px;
    text-align: center;
    margin: 15px;
  }

  @media only screen and (min-width: ${Devices.LARGE_SCREEN}) {
    font-size: 26px;
    margin: 10px;
  }

  :first-child {
    margin-bottom: 5px;
    font-size: 36px;
  }
`;

export const Filler = styled.div`
  width: 400px;
`;
