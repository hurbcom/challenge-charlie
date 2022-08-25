import React from 'react';
import * as Sentry from '@sentry/browser';

import { ErrorBoundaryProps, State } from './types';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };

    this.showReportDialog = this.showReportDialog.bind(this);
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true,
    });

    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        // eslint-disable-next-line
        // @ts-ignore
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });
  }

  showReportDialog(): void {
    if (process.env.NODE_ENV === 'production' || this.state.hasError) {
      Sentry.showReportDialog();
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <a onClick={this.showReportDialog}>Report feedback</a>;
    }

    // when there are no errors, render children untouched
    return this.props.children;
  }
}

export default ErrorBoundary;
