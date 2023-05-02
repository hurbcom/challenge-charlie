import styled from "styled-components";
/* from https://epic-spinners.epicmax.co/#/ */

export const SpinnerInner = styled.div`
    width: calc(70px / 7);
    height: calc(70px / 7);
    background-color: #fff;
    color: #fff;
    box-shadow: 15px 15px 0 0, -15px -15px 0 0, 15px -15px 0 0, -15px 15px 0 0,
        0 15px 0 0, 15px 0 0 0, -15px 0 0 0, 0 -15px 0 0;
    animation: pixel-spinner-animation 2000ms linear infinite;
    @keyframes pixel-spinner-animation {
        50% {
            box-shadow: 20px 20px 0px 0px, -20px -20px 0px 0px,
                20px -20px 0px 0px, -20px 20px 0px 0px, 0px 10px 0px 0px,
                10px 0px 0px 0px, -10px 0px 0px 0px, 0px -10px 0px 0px;
        }
        75% {
            box-shadow: 20px 20px 0px 0px, -20px -20px 0px 0px,
                20px -20px 0px 0px, -20px 20px 0px 0px, 0px 10px 0px 0px,
                10px 0px 0px 0px, -10px 0px 0px 0px, 0px -10px 0px 0px;
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
export const SpinnerComponent = styled.div`
    box-sizing: border-box;
    height: 70px;
    width: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${SpinnerInner} {
        box-sizing: border-box;
    }
`;
