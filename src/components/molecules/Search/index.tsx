import React, { FC } from 'react';
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
  const { coords } = useLocation();

  /* eslint-disable-next-line no-console */
  console.log(coords);

  return (
    <Styles.Container>
      <Styles.Icon>
        <Icon name='compass' size={40} color='#ccc' />
      </Styles.Icon>
      <TextField
        type='text'
        placeholder='Digite aqui sua localização'
        /* eslint-disable-next-line no-console */
        onChange={e => console.log(e.target.value)}
      />
    </Styles.Container>
  );
};

export default React.memo(Search);
