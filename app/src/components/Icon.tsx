import React from 'react';
import { styled } from 'utils';

interface Props {
  icon: string;
  size?: string;
  color?: string;
}

interface IconProps {
  size?: string;
  'data-icon': string;
  color?: string;
}

const IconContainer = styled.i<IconProps>`
  ${({ size }) => (size ? `font-size: ${size};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}
  left: 0;
  margin: 10px;
`;

function Icon({ icon, size, color }: Props) {
  return <IconContainer data-icon={icon} size={size} color={color} />;
}

export default Icon;
