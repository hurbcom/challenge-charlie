import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: blue;
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    border: none;
`;

export const SearchContainer = styled.div`
    background: white;
    padding: 1rem 0.5rem;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`;

export const TodayContainer = styled.div`
    background: yellow;
    display: flex;
    justify-content: space-between;
    > div {
        flex: 1;
        margin: 0.5rem 0 3.5rem 0;
    }
`;

export const TodayInfo = styled.div`
    > span {
        font-size: 1.1rem;
    }
    > div > span {
        font-size: 1.1rem;
        display: block;
    }
    > div {
        margin: 0.5rem 0 1.5rem 0;
    }
`;

export const TomorrowInfo = styled.div`
    background: orangered;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.1rem;

    > div {
        width: 50%;
        margin: 0.5rem 0 1rem 0;
    }
`;

export const AfterTomorrow = styled.div`
    background: orange;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.1rem;

    > div {
        width: 50%;
        margin: 0.5rem 0 1rem 0;
    }
`;
