import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
        > span {
            margin-right: 1rem;
            cursor: pointer;
        }
        > img {
            width: 40px;
        }
    }
`;
