import { HtmlHTMLAttributes } from 'react';

export interface IBackgroundImage extends HtmlHTMLAttributes<HTMLDivElement> {
  backgroundImageUrl: string;
}
