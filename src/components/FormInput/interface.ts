import { FormHTMLAttributes } from 'react';

export interface IFormInput extends FormHTMLAttributes<HTMLFormElement> {
  loading: boolean;
  onSubmitForm?: (value: string) => void;
}
