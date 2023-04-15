import React, { Suspense } from "react";
import { GlobalStyle } from "./styles/global";
import MainPage from "@pages/main";
import {
    QueryClient,
    QueryClientProvider,
    QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <ErrorBoundary
                        onReset={reset}
                        fallbackRender={({ resetErrorBoundary }) => (
                            <div>
                                {/* TODO: estilizar esse cara para ter um erro com usabilidade melhor */}
                                There was an error !
                                <button onClick={() => resetErrorBoundary()}>
                                    Try again
                                </button>
                            </div>
                        )}
                    >
                        <Suspense fallback={<div>Suspending...</div>}>
                            <GlobalStyle />
                            <MainPage />
                        </Suspense>
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        </QueryClientProvider>
    );
};

export default App;
