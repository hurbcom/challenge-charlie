import { createContext, ReactNode, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  handleLoadingState: (state: boolean) => void;
}

interface LoadingContextProviderProps {
  children: ReactNode;
}

export const LoadingContext = createContext({} as LoadingContextType)

export function LoadingContextProvider({ children }: LoadingContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoadingState(state: boolean) {
    setIsLoading(state)
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        handleLoadingState
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}