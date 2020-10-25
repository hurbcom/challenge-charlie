import React, { ReactNode } from 'react';
import { ButtonDrawAnchor } from './styles';

export interface ButtonDraw {
  children: ReactNode;
  url?: string;
  fileUrl?: string;
}

export const ButtonDraw = ({ children, url, fileUrl }: ButtonDraw) => {
  return (
    <ButtonDrawAnchor
      href={url || '#'}
      onClick={e => {
        if (!fileUrl) return;
        e.preventDefault();
        window.open(fileUrl, '_blank');
      }}
    >
      <span>{children}</span>
    </ButtonDrawAnchor>
  );
};
