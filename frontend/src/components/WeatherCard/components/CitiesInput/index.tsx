import React from 'react';

import Input from '@components/Input';

type Props = {
  value: string;
  onChange(e: React.FormEvent<HTMLInputElement>): void
}

const CitiesInput: React.FC<Props> = ({
  value,
  onChange,
}) => (
  <div className="cities-input">
    <i className="icon" data-icon="(" />

    <Input
      type="text"
      className="input"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default CitiesInput;
