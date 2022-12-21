import React from 'react';
import { stringify } from 'querystring';

type ErrorBoundaryComponentProps = {
  children: JSX.Element;
};

type ErrorBoundaryComponentState = {
  hasError: boolean;
};

export class ErrorBoundaryComponent extends React.Component<
  ErrorBoundaryComponentProps,
  ErrorBoundaryComponentState
> {
  constructor(props: ErrorBoundaryComponentProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
