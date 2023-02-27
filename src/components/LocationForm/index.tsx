import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MeteoconsWebfontEnum } from '../../enums/MeteoconsWebfontEnum';

import * as S from './styles';

const LocationForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  function handleSendLocationName(data: any) {
    console.log(data);
  }

  useState(() => {
    handleSendLocationName();
  });

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleSendLocationName)}>
        <span
          className="location-icon"
          data-icon={MeteoconsWebfontEnum.compass}
        />
        <input
          id="location"
          type="search"
          placeholder="Rio de Janeiro, Rio de Janeiro"
          {...register('location-name')}
        ></input>
      </form>
    </S.Container>
  );
};

export default LocationForm;
