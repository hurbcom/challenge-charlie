import styled from 'styled-components';

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
    flex-direction: column;
    align-items: center;
`;

export const TodayInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5rem;
    padding: 1.5rem;
    > img {
        width: 80px;
        margin: 1.5rem;
    }
`;

export const TodayOthersInfoContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    justify-content: space-between;
`;

export const TodayOthersInfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    :last-child {
        margin-right: 0;
    }
    > img {
        width: 30px;
        margin-right: 0.5rem;
    }
`;

export const TomorrowInfo = styled.div`
    background: orangered;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    > div {
        display: flex;
        align-items: center;
        > span {
            margin-right: 1rem;
        }
        > img {
            width: 40px;
        }
    }
`;

export const AfterTomorrowInfo = styled.div`
    background: orange;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
        > span {
            margin-right: 1rem;
        }
        > img {
            width: 40px;
        }
    }
`;
