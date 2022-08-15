import React from 'react';
import styled from 'styled-components';
import AfterTomorrow from './AfterTomorrow';
import Today from './Today';
import Tomorrow from './Tomorrow';

const Styles = {
  Container: styled.div``,
};

const Stages = () => {
  return (
    <Styles.Container>
      <div className='content'>
        <Today />
        <Tomorrow />
        <AfterTomorrow />
      </div>
    </Styles.Container>
  );
};

export default Stages;
