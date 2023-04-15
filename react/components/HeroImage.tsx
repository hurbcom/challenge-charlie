import { BING_BASE_URL } from "../constants/index";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { getBackgroundImageURL } from "../../shared/services/bg-image.service";

const BackgroundWithImage = styled.div<{ image: string }>`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    height: 100vh;
    flex-direction: column;
`;

//TODO: testes unitárioos pra esse componente
export default ({ children }: { children: React.ReactNode }) => {
    const { data } = useQuery({
        queryKey: ["background-image"],
        queryFn: async () => {
            return fetch(
                `${window.isServer ? process.env.APP_URL : ""}/get-image`
            ).then((res) => res.json());
        },
        suspense: true,
    });

    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary
                    onReset={reset}
                    fallbackRender={({ resetErrorBoundary }) => (
                        <div>
                            There was an error fetching the image!
                            <button onClick={() => resetErrorBoundary()}>
                                Try again
                            </button>
                        </div>
                    )}
                >
                    <BackgroundWithImage image={`${BING_BASE_URL}${data.url}`}>
                        <Overlay />
                        <Content>{children}</Content>
                    </BackgroundWithImage>
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
};
