import * as React from 'react';

export interface IIconProps {
    className?: string;
    style?: React.CSSProperties;
    src: string;
    width?: number | string;
}

export default function Icon (props: IIconProps) {
    const _class = `${props.className ?? ""}`;
  return (
    <img className={_class} style={props.style} src={props.src} width={props.width} />
  );
}
