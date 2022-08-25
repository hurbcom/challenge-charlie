import React from 'react';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface State {
  hasError: boolean;
}
