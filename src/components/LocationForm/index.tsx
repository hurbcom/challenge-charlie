import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GeoLocationContext } from '../../contexts/GeoLocationContext';
import { MeteoconsWebfontEnum } from '../../enums/MeteoconsWebfontEnum';

import * as S from './styles';

const LocationForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const { geoLocation } = useContext(GeoLocationContext);

  function handleSendLocationName(data: any) {
    console.log(data);
  }

  useState(() => {
    handleSendLocationName();
  }, []);

  useState(() => {
    console.log(`LocationForm`, geoLocation);
  }, [geoLocation]);

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleSendLocationName)}>
        <span className='location-icon' data-icon={MeteoconsWebfontEnum.compass} />
        <input
          id='location'
          type='search'
          placeholder={geoLocation.locationName || 'Informe uma cidade'}
          {...register('location-name')}
        ></input>
      </form>
    </S.Container>
  );
};

export default LocationForm;
