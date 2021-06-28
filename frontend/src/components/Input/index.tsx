import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  type: string;
  className: string;
  value: string;
  onChange(e: React.FormEvent<HTMLInputElement>): void;
}

const Input: React.FC<Props> = ({
  type,
  className,
  value,
  onChange: onChangeCallback,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const onChangeValue = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setInputValue(target.value);

    onChangeCallback(e);
  }, [onChangeCallback]);

  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  return (
    <input
      type={type}
      className={className}
      value={inputValue}
      onChange={onChangeValue}
    />
  );
};

export default Input;
