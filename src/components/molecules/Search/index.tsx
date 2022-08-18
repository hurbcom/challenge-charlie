import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextField, Icon } from 'atoms';
import { useLocation } from 'hooks';

const Styles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  Icon: styled.div`
    display: flex;
    > div {
      display: flex;
    }
  `,
};

const Search: FC = () => {
  const [value, setValue] = useState<string | null>();
  const { geolocalization } = useLocation();

  useEffect(() => {
    if (geolocalization?.city && !value) {
      setValue(`${geolocalization?.suburb}, ${geolocalization?.city}`);
    }
  }, [geolocalization, value]);

  return (
    <Styles.Container>
      <Styles.Icon>
        <Icon name='compass' size={40} color='#ccc' />
      </Styles.Icon>
      <TextField
        type='text'
        placeholder='Digite aqui sua localização'
        value={value ?? ''}
        /* eslint-disable-next-line no-console */
        onChange={e => console.log(e.target.value)}
      />
    </Styles.Container>
  );
};

export default React.memo(Search);
