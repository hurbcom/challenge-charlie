import { ReactChild } from 'react';
import { FooterStyled } from './style';

export const Footer = ({ children }: { children: ReactChild }) => <FooterStyled>{children}</FooterStyled>;
