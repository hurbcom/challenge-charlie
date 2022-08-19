import React, { useMemo } from 'react';

import sources from './sources';
import { Container } from './styles';

type TIcon = {
  className?: string;
  name: keyof typeof sources;
  color?: string;
  margin?: string;
  size?: number;
  opacity?: number;
  hoverColor?: string;
  cursor?: 'pointer' | 'default ' | string;
  onClick?: () => void;
};

const Icon = ({
  color = '',
  name = 'loading',
  size = 24,
  opacity = 1,
  className,
  onClick,
  ...props
}: TIcon) => {
  const Component = useMemo(() => sources[name], [name]);

  return (
    <Container onClick={onClick} className={className} {...props}>
      <Component {...{ color, size, opacity }} />
    </Container>
  );
};

export default Icon;
