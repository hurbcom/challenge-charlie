import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { TextField, Icon } from 'atoms';
import { useWeather } from 'hooks';

const Styles = {
  Container: styled.form`
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
  const { getWeather } = useWeather();

  const [value, setValue] = useState<string | null>();

  const handleSubmit = (event: FormEvent) => {
    value && getWeather(value)();

    event.preventDefault();
  };

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <Styles.Icon>
        <Icon name='compass' size={40} color='#ccc' />
      </Styles.Icon>
      <TextField
        type='text'
        placeholder='Digite aqui sua localização'
        value={value ?? ''}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </Styles.Container>
  );
};

export default React.memo(Search);
