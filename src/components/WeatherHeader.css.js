import styled from 'styled-components';

export const WeatherHeader = styled.header`
    background: rgba(255, 255, 255, 0.9);
    padding: 0.625rem;
`;

export const WeatherHeaderForm = styled.form`
    display: flex;
`;

export const WeatherHeaderInput = styled.input`
    border: none;
    background: transparent;
    margin-left: 0.625rem;
    color: #666666;
    font-size: 1.125rem;
    font-weight: 700;
    outline: none;
`;

export const WeatherHeaderIcon = styled.img`
    height: 2.125rem;
    width: auto;
`;