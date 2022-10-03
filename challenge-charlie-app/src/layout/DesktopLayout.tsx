import * as React from 'react';
import "./DesktopLayout.scss" ;

export interface IDesktopLayoutProps {
    className?: string;
    displayComponent: React.ReactNode;
    infoComponent: React.ReactNode;
}

export interface IDesktopLayoutState {
}

export default class DesktopLayout extends React.Component<IDesktopLayoutProps, IDesktopLayoutState> {
  constructor(props: IDesktopLayoutProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const _classes =`${this.props.className ?? ''} charlie-desktop-layout-container`
    return (
      <div className={_classes}>
        <div className="charlie-desktop-layout-display">{this.props.displayComponent}</div>
        <div className="charlie-desktop-layout-info">{this.props.infoComponent}</div>
      </div>
    );
  }
}
