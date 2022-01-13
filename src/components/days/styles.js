import styled from 'styled-components'

export const StyledInput = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    padding: 5px;
    border-radius: 0 8px 8px 0;
    background-color: #ffffffba;

    :focus-visible {
        outline: none;
    }
`

export const InputContainer = styled.div`
    display: flex;
    margin-bottom: 20px;

    > img {
        width: 25px;
        padding: 0 10px;
        background-color: #ffffffba;
        border-radius: 8px 0 0 8px;
    }
`
export const Today = styled.div`
    display: flex;
    justify-content: space-around;

    > img {
        width: 25%;
        margin-top: -20px;
    }
`

export const Title = styled.div`
    padding: 20px;
    span {
        cursor: pointer;
    }
    > h4,
    h5 {
        margin: 0;
    }
`

export const TodayInformation = styled.div`
    padding: 20px;
    text-align: left;
    > p {
        margin: 0;
    }
`

export const CurrentSection = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 16px 16px 0 0;
    padding: 40px;
`

export const NextDaysSection = styled.div`
    display: flex;
    padding: 30px;
    justify-content: center;
    background-color: ${(props) => props.color};
    border-radius: ${(props) => (props.applyBorder ? '0 0 16px 16px' : 'none')};

    > img {
        width: 30px;
    }
`
