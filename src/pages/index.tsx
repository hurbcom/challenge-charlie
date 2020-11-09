import React, { FunctionComponent } from 'react';

import BackgroundImage from '../container/BackgroundImageContainer';
import Store from '../container/StoreContainer';
import CardWeather from '../container/CardWeatherContainer';
import FormInput from '../container/FormInputContainer';
import Page from '../components/Page';

const Index: FunctionComponent = () => {
  return (
    <>
      <BackgroundImage>
        <Page>
          <FormInput />
          <CardWeather />
        </Page>
      </BackgroundImage>
      <Store />
    </>
  );
};

export default Index;
