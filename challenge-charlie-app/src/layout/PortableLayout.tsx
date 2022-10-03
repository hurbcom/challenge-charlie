import * as React from 'react';
import "./PortableLayout.scss" ;

export interface IPortableLayoutProps {
    className?: string;
    infoComponent: React.ReactNode;
}

export interface IPortableLayoutState {
}

export default class PortableLayout extends React.Component<IPortableLayoutProps, IPortableLayoutState> {
  constructor(props: IPortableLayoutProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const _classes =`${this.props.className ?? ''} charlie-portable-layout-container`
    return (
      <div className={_classes}>
        <div className="charlie-portable-layout-info">{this.props.infoComponent}</div>
      </div>
    );
  }
}
