import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

import { SPage } from './styled';

type TPage = HtmlHTMLAttributes<HTMLDivElement>;

const Page: FunctionComponent<TPage> = ({ children }) => {
  return <SPage>{children}</SPage>;
};

export default Page;
