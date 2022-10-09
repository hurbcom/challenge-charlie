import * as React from 'react';
import './DisplayComponent.scss';

export interface IDisplayComponentProps {
   className?: string
   backgroundSrc?: string
}

export interface IDisplayComponentState {
    backgroundSrc?: string
}

export default class DisplayComponent extends React.Component<IDisplayComponentProps, IDisplayComponentState> {
  constructor(props: IDisplayComponentProps) {
    super(props);

    this.state = {
        backgroundSrc: this.props.backgroundSrc
    }
  }

  public render() {
    const _classes =`${this.props.className ?? ''} charlie-display-container`;
    const _style: React.CSSProperties = {
      backgroundImage: this.props.backgroundSrc,
      backgroundSize: '100% 100%',
    };
    return (
      <div className={_classes} style={_style}>
        <br/>
      </div>
    );
  }
}
