import React, { FC } from 'react';
import styled from 'styled-components';
import { TextField, Icon } from 'atoms';

const Styles = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  Icon: styled.div`
    display: flex;
  `,
};

const Search: FC = () => {
  return (
    <Styles.Container>
      <Styles.Icon>
        <Icon name='compass' color='black' />
      </Styles.Icon>
      {/* eslint-disable-next-line no-console */}
      <TextField type='text' onChange={e => console.log(e.target.value)} />
    </Styles.Container>
  );
};

export default Search;
