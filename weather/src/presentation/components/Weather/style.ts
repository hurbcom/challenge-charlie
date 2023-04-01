import styled, { css } from 'styled-components'

type WeatherProps = {
    isCurrent?: boolean;
    infoType?: 'day' | 'weather' | 'temperature' | 'others';
    isPositionRight?: boolean;
    bgColor?: string;
}

export const Content = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 570px;
    height: 100%;

    display: flex;
    flex-direction: column;
`;

export const CenterSpinner = styled.div`
    margin: 10px auto;
`;


export const WeatherContent = styled.div<WeatherProps>`
    box-sizing: border-box;
    width: 100%;
    height: ${props => props.isCurrent ? '65%' : '20%'};
    padding: 5px 0;
    background-color: ${props => props.bgColor};
    opacity: 0.8;
    box-shadow: 0px 3px 5px rgba(0,0,0, 0.1);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    @media (min-width: 470px) {
        flex-direction: row;
        justify-content: flex-end;
        gap: 5px;
        align-self: flex-end;
    }
`;

export const IconContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 50%;
    
    @media (min-width: 470px) {
        padding-top: 30px;
        padding-left: 10px;
        width: 50%;
        height: 100%;
    }
`;

export const InfoContainer = styled.div`
    box-sizing: border-box;
    
    width: 100%;
    height: 45%;

    display: flex;
    flex-direction: column;
    
    @media (min-width: 470px){
        width: 50%;
        height: 100%;

        justify-content: center;
        gap: 20px;
    }
`;

export const InfoDataContainer = styled.div<WeatherProps>`
    box-sizing: border-box;
    
    width: 100%;
    height: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 470px) {
        height: 60%;
        justify-content: ${props => props.isCurrent ? 'space-between' : 'flex-start'};
        align-items: ${props => props.isPositionRight && 'flex-end'};
    }
`;

export const InfoData = styled.span<WeatherProps>`
    box-sizing: border-box;
    width: 100%;
    
    
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: ${ props =>
        props.infoType === 'weather' ? '30px' : 
        props.infoType === 'temperature' ? '34px' : '28px'
    };
    color: #fff;

    text-transform: ${props => props.infoType === 'day' ? 'uppercase' : 'capitalize'};
    text-align: center;

    //type others css
    ${ props => props.infoType === 'others' && css({
        fontSize: '18px',
        textAlign: 'left',
        width: '75%',
        whiteSpace: 'nowrap'
    })}
    
    @media (min-width: 470px){
        width: ${props => props.infoType ? '70%': '100%'};
        font: 500 24px 'Roboto', sans-serif;
        color: #fff;
        text-transform: ${props => props.infoType === 'day' && 'uppercase'};
        text-align: left;

        font-size: ${props =>
            props.infoType === 'weather' ? '28px' :
            props.infoType === 'temperature' ? '26px' :
            props.infoType === 'others' ? '22px' : '24px'
        };
    }
`;

export const Wrapper = styled(InfoDataContainer)`
    height: 100%;
    flex-direction: ${props => props.infoType === 'others'? 'column' : 'row'} ;
    gap: ${props => props.infoType === 'others' && '10px'};
    border: none;

    @media (min-width: 470px) {
        width: 100%;
        height: 30%;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;