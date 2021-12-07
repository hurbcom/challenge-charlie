import { Icon } from 'components';
import React from 'react';
import { styled } from 'utils';

const Container = styled.div`
  color: white;
  font-size: 1em;
  display: flex;
  flex: 1;
  flex-direction: column;

  .weather-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 25px;
  }
`;

interface Props {
  icon?: string | null;
}

function WeatherCardIcon({ icon }: Props) {
  return <Container>{icon ? <Icon icon={icon} size='10em' /> : ''}</Container>;
}

export default WeatherCardIcon;
