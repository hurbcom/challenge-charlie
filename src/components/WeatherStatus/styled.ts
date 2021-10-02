import styled from 'styled-components';

export const WeatherHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 8;
    width: 100%;
    height: auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-template-rows: 3fr 1fr 1fr;
    width: 100%;
    height: 100%;
`;

// today weather
export const statusWrapper = styled.div`
    flex-direction: column;
    opacity: 70%;
    height: 100%;
    background: #ffd717;
    padding: 0 5px 0 5px;
`;

export const TomorrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #facc05;
    opacity: 90%;
    padding: 0 5px 0 5px;
    @media screen and (max-width: 425px) {
        p {
            font-size: 18px;
        }
    }
`;

export const AfterTomorrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #b89503;
    padding: 0 5px 0 5px;
    @media screen and (max-width: 425px) {
        p {
            font-size: 18px;
        }
    }
`;

type IconWrapperProps = {
    bgColor: string;
    opacity?: string;
};

export const IconWrapper = styled.div<IconWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: ${({ bgColor }) => bgColor};
    opacity: ${({ opacity }) => opacity || '1'};
`;

type TextProps = {
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
    padding?: string;
};

export const Text = styled.p<TextProps>`
    color: #fff;
    font-size: ${({ fontSize }) => fontSize || '14px'};
    font-weight: ${({ fontWeight }) => fontWeight || '400'};
    font-family: ${({ fontFamily }) =>
        fontFamily ||
        "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"};
    padding: ${({ padding }) => padding || 0};
`;
