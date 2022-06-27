import styled from "styled-components";

export const ResultSpace = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    background: ${(props) => props.yellow ?  'rgb(250,204,5)' : props.blue ? '' : 'rgba(242, 241, 242, 1)'};
`


export const Labels = styled.div`
    padding: 1%;
    display: flex;
    flex-direction: ${(props) => props.column ? 'column' : 'row'};
    text-transform: ${(props) => props.upper ? 'uppercase' : 'capitalize'};
`

export const Values = styled.div`

`
export const Today = styled.div`
    display: flex;
    padding: 1%;
`
export const Tomorrow = styled.div`
    padding: 1%;
`

export const AfterTomorrow = styled.div`
    padding: 1%;
`

export const Icon = styled.img`
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: black;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;  
`