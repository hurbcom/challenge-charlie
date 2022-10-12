import * as React from 'react';
import Icon from './common/icon/Icon';
import './DisplayComponent.scss';

export interface IDisplayComponentProps {
   className?: string
   backgroundSrc?: string
   copyright?: string;
}

export interface IDisplayComponentState {
    backgroundSrc?: string;
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
        <div className='display-logo'>
          <Icon style={{maxWidth: '5vw'}} src='/2682824_horizont_morning_sun_sunrise_weather_icon.svg'></Icon>
          <div className='logo-label'>Charlie</div>
        </div>
        <div className='display-copyright'>
          <div className='copyright-text'>{this.props.copyright}</div>
        </div>
      </div>
    );
  }
}
