import styled from "styled-components";

export const FullScreenLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

export const LoaderWrapper = styled.div`
    border: 10px solid var(--gray-100);
    border-top: 10px solid var(--blue-300);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
