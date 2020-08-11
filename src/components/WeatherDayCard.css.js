import styled from 'styled-components';

export const Day = styled.article`
    background: ${props => props.theme[props.color] ? props.theme[props.color] : "#FFFFFF"}e6;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.25rem;
`;

export const DayIcon = styled.aside`
    background: url(${props => props.condition ? require(`../icons/${props.condition}.svg`) : ""});
    background-size: auto 30%;
    background-repeat: no-repeat;
    background-position: center;
    grid-column: span 1;
`;

export const DayInfo = styled.div`
    grid-column: span 1;
    color: white;
    padding: 1.25rem 0;
    min-height: 3.75rem;
`;

export const DayInfoTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    margin: 0;
    padding-right: 1.25rem;
`;

export const DayInfoTemperature = styled.h2`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.125rem;
    margin: 5px 0 0 0;
`;

export const DayInfoCondition = styled.h3`
    text-transform: capitalize;
    font-weight: 700;
    font-size: 1.125rem;
    margin: 1rem 0;
`;