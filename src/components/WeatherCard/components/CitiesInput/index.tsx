import React from 'react';

type Props = {
  value: string;
}

const CitiesInput: React.FC<Props> = ({
  value,
}) => (
  <div className="cities-input">
    <i className="icon" data-icon="(" />

    <input
      type="text"
      className="input"
      value={value}
    />
  </div>
);

export default CitiesInput;
