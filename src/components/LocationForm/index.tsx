import React from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';

const LocationForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Rio de Janeiro, Rio de Janeiro"
          {...register('location')}
        ></input>
      </form>
    </S.Container>
  );
};

export default LocationForm;
