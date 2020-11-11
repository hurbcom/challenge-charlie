import React, { FunctionComponent } from 'react';

import { IFormInput } from './interface';
import { SCompassIcon, SForm, SSpinner } from './styled';

const FormInput: FunctionComponent<IFormInput> = ({
  children,
  loading,
  onSubmitForm
}) => {
  return (
    <SForm onSubmit={onSubmitForm}>
      {loading ? (
        <SSpinner />
      ) : (
        <SCompassIcon src="/assets/icons/compass.svg" />
      )}
      {children}
    </SForm>
  );
};

export default FormInput;
