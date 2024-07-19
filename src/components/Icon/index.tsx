import type { HTMLAttributes } from "react";
import { PropsWithChildren } from "react";
import { IconContainer } from "./styles";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: number;
  color?: string;
  clickable?: boolean;
}

const Icon = (props: PropsWithChildren<IconProps>) => {
  const { size, color, clickable = false, ...otherProps } = props;
  return (
    <IconContainer
      data-testid="icon"
      $size={size}
      $color={color}
      $clickable={clickable}
      {...otherProps}
    >
      {props.children}
    </IconContainer>
  );
};

export default Icon;
