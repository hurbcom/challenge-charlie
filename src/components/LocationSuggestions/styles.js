import styled from 'styled-components';
import { media } from '../../styles/devices';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

export const StyledCombobox = styled(Combobox)`
  width: 100%;
  height: 100%;
`;

export const Input = styled(ComboboxInput)`
  height: 100%;
  display: flex;

  color: #878787;
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 600;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #cfcfcf;
    font-weight: 400;
    font-style: italic;
  }

  ${media.mobileS} {
    font-size: 1.2rem;
    padding: 0 0 0 3rem;
  }

  ${media.mobileM} {
    font-size: 1.5rem;
  }

  ${media.laptop} {
    font-size: 2.3rem;
    padding: 0 0 0 5rem;
  }

  ${media.desktop} {
    font-size: 3.3rem;
    padding: 0 0 0 7.5rem;
  }
`;

export const ListWrapper = styled(ComboboxPopover)`
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
`;

export const OptionList = styled(ComboboxList)``;

export const Option = styled(ComboboxOption)`
  color: #878787;

  &:last-child {
    border-radius: 0 0 12px 12px;
  }

  ${media.mobileS} {
    font-size: 1.2rem;
    padding: 0.3rem 0.5rem;
  }

  ${media.desktop} {
    font-size: 1.6rem;
    padding: 0.6rem 1rem;
  }
`;
