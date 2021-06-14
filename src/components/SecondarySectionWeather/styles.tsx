import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    align-items: center;
    font-size: 1.2rem;
    > div {
        display: flex;
        align-items: center;
        > span {
            margin-right: 1rem;
            cursor: pointer;
            transition: transform 0.1s;
            -webkit-transition: transform 0.1s;
            :hover {
                -webkit-animation: pulse 0.25s;
                animation: pulse 0.25s;
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                -moz-transform: scale(1.1);
                transform: scale(1.1);
            }
            @keyframes pulse {
                0% {
                    -webkit-transform: scale(1);
                    -ms-transform: scale(1);
                    -moz-transform: scale(1);
                    transform: scale(1);
                }
                100% {
                    -webkit-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    transform: scale(1.1);
                }
            }
        }
        > img {
            width: 40px;
        }
    }
`;
