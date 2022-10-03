import * as React from 'react';
import * as axios from 'axios';
import DisplayComponent from '../DisplayComponent';
import { BingImageArchiveResponse } from './BingImageArchiveResponse';
import { BingApi } from './BingApi';

export interface IBingDisplayComponentProps {
  mkt: string;
  format?: string;
}

export interface IBingDisplayComponentState {
    backgroundSrc?: string
}

export default class BingDisplayComponent extends React.Component<IBingDisplayComponentProps, IBingDisplayComponentState> {
  constructor(props: IBingDisplayComponentProps) {
    super(props);

    this.state = {}
  }

  async componentDidMount(): Promise<void> {
      try {
        const data: BingImageArchiveResponse = await BingApi.getImageArchive((this.props.format ?? 'js'), this.props.mkt);
        this.setState({backgroundSrc: `url('${data.images[0].url}')`})
      } catch (error) {
        this.setState({backgroundSrc: 'none'})
      }
  }

  public render() {
    return (
       <DisplayComponent backgroundSrc={this.state.backgroundSrc}></DisplayComponent>
    );
  }
}
