import styled from "styled-components";

export const StyledContainer = styled.div`
    position: fixed;
    z-index: 3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: ${(props) => (props.visible ? "flex" : "none")};
`;

export const StyledLoader = styled.div`
    position: relative;
    display: inline-block;
    width: 12em;
    height: 10em;
    font-size: 1em;
    color: #969696;
    .cloud {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        width: 3.6875em;
        height: 3.6875em;
        margin: -1.84375em;
        background: currentColor;
        border-radius: 50%;
        box-shadow: -2.1875em 0.6875em 0 -0.6875em,
            2.0625em 0.9375em 0 -0.9375em, 0 0 0 0.375em #fff,
            -2.1875em 0.6875em 0 -0.3125em #fff,
            2.0625em 0.9375em 0 -0.5625em #fff;
    }
    .cloud:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: -0.5em;
        display: block;
        width: 4.5625em;
        height: 1em;
        background: currentColor;
        box-shadow: 0 0.4375em 0 -0.0625em #fff;
    }

    .sun {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2.5em;
        height: 2.5em;
        margin: -1.25em;
        border-radius: 50%;
        box-shadow: 0 0 0 0.375em #fff;
        animation: spin 12s infinite linear;
    }
    .rays {
        position: absolute;
        top: -2em;
        left: 50%;
        display: block;
        width: 0.375em;
        height: 1.125em;
        margin-left: -0.1875em;
        background: #fff;
        border-radius: 0.25em;
        box-shadow: 0 5.375em #fff;
    }
    .rays:before,
    .rays:after {
        content: "";
        position: absolute;
        top: 0em;
        left: 0em;
        display: block;
        width: 0.375em;
        height: 1.125em;
        transform: rotate(60deg);
        transform-origin: 50% 3.25em;
        background: #fff;
        border-radius: 0.25em;
        box-shadow: 0 5.375em #fff;
    }
    .rays:before {
        transform: rotate(120deg);
    }
    .cloud + .sun {
        margin: -2em 1em;
    }

    .rain {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        width: 3.75em;
        height: 3.75em;
        margin: 0.375em 0 0 -2em;
    }

    .rain:after {
        content: "";
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        width: 1.125em;
        height: 1.125em;
        margin: -1em 0 0 -0.25em;
        background: #0cf;
        border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
        box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
            -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
            -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
        transform: rotate(-28deg);
        animation: rain 3s linear infinite;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes rain {
        0% {
            background: #0cf;
            box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                -1.375em -0.125em 0 #0cf;
        }
        25% {
            box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                -0.875em 1.125em 0 -0.125em #0cf,
                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
        }
        50% {
            background: rgba(255, 255, 255, 0.3);
            box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
        }
        100% {
            box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                -1.375em -0.125em 0 #0cf;
        }
    }
`;
