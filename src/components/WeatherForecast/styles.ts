import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 420px;
    margin: 32px;
    text-align: center;
`;

export const WeatherDataLoading = styled.div`
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.white};

    & span {
        color: ${({ theme }) => theme.colors.darkGray};
        animation: fade 1.6s infinite;

        @keyframes fade {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;
