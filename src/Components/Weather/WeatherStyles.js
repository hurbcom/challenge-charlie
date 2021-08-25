import styled from "styled-components";

export const StyledWeather = styled.div`
    width: 100%;
    box-shadow: 1px 1px 2px 2px #0000002b;
    color: #fff;
    padding: 25px 45px 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(
        to right,
        rgba(40, 40, 40, 0.9) 0%,
        rgba(70, 70, 70, 0.9) 100%
    );
    @media (min-width: 1024px) {
        position: relative;
        flex-direction: row;
        padding: 25px 85px 60px;
    }
    .icon {
        font-size: 180px;
        @media (min-width: 1024px) {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
        }
        @media (min-width: 1024px) {
            font-size: 250px;
            left: 50px;
        }
        @media (min-width: 1366px) {
            font-size: 300px;
            left: 70px;
        }
    }
    .info {
        width: 100%;
        @media (min-width: 1024px) {
            width: 345px;
        }
        .details {
            margin-top: 30px;
            @media (min-width: 1024px) {
                margin-top: 55px;
            }
        }
        h2 {
            text-transform: uppercase;
        }
        h2,
        h3 {
            margin-bottom: 15px;
            line-height: 100%;
            font-size: 27px;
            @media (min-width: 1024px) {
                font-size: 32px;
            }
        }
        h3 {
            text-transform: capitalize;
        }
        p {
            @media (min-width: 1024px) {
                font-size: 22px;
            }
        }
    }
    .details,
    .icon {
        display: none;
    }
    &:hover {
        padding-bottom: 70px;
        @media (min-width: 1366px) {
            padding-bottom: 125px;
        }
        .details,
        .icon {
            display: block;
        }
    }
`;
