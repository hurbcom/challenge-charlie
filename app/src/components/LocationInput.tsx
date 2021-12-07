import React, { FormEventHandler, ChangeEventHandler } from 'react';
import { styled, colors } from 'utils';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  value: string;
}

const Container = styled.form`
  font-size: 2em;
  height: 75px;
  display: flex;
  align-items: center;
  background-color: white;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 5px 5px 0px rgba(190, 190, 190, 0.5);
`;

const Input = styled.input`
  border: 0;
  font-size: 0.75em;
  padding: 0 10px;
  font-weight: bold;
  height: 100%;
  color: ${colors.gray};
  flex: 1;

  :focus {
    outline: none;
  }
`;

const Icon = styled.i`
  font-size: 1.5em;
  color: ${colors.gray};
  left: 0;
  margin: 10px;
`;

function LocationInput({ value, onChange, onSubmit }: Props) {
  return (
    <Container onSubmit={onSubmit}>
      <Icon data-icon='(' />
      <Input name='location' type='text' value={value} onChange={onChange} />
    </Container>
  );
}

export default LocationInput;
