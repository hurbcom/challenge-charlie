import styled from "styled-components";

export const ResultSpace = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    padding-bottom: 10%;
    justify-content: space-between;
    background: ${(props) => props.yellow ?  'rgba(250,204,5, 0.6)' : props.blue ? 'rgba(17,140,198, 0.6)' : 'rgba(242, 241, 242, 1)'};
`

export const Labels = styled.div`
    padding: 1%;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    align-items:${(props) => props.column ? 'center' : 'baseline'};;
    flex-direction: ${(props) => props.column ? 'column' : 'row'};
    text-transform: ${(props) => props.upper ? 'uppercase' : 'capitalize'};
    @media screen and (max-width: 590px){
        font-size: 1.2rem;
    }
`

export const Values = styled.div`
    font-size: ${(props) => props.big ? '1.5rem' : '1rem'};
    cursor: ${(props) => props.pointer && 'pointer'};
    @media screen and (max-width: 590px){
        font-size: 1rem;
    }
`
export const Today = styled.div`
    display: flex;
    padding: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 390px){
        flex-direction: column;
    }
`
export const NotToday = styled.div``

export const Columns = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => props.second ? 'space-between' : 'center'};
    padding: ${(props) => props.second && '2% 0'};
    @media screen and (max-width: 390px){
        width: auto;
    }
`

export const Tomorrow = styled.div`
    padding: 2% 0;
    display: flex;
    justify-content: end;
    padding-right: 20%;
    background: ${(props) => props.yellow ?  'rgba(250,204,5, 0.9)' : props.blue ? 'rgba(17,140,198, 0.9)' : 'rgba(242, 241, 242, 1)'};
    @media screen and (max-width: 590px){
        justify-content: center;
        padding-right: 0;
    }
`

export const AfterTomorrow = styled.div`
    padding: 2% 0;
    display: flex;
    justify-content: end;
    padding-right: 10%;
    background: ${(props) => props.yellow ?  'rgba(250,204,5, 0.7)' : props.blue ? 'rgba(17,140,198, 0.9)' : 'rgba(242, 241, 242, 1)'};
    @media screen and (max-width: 590px){
        justify-content: center;
        padding-right: 0;
    }
`

export const Icon = styled.img`
    width: 9em;
    height: 9em;
    display: inline-block;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;  
    @media screen and (max-width: 700px){
        width: 8em;
        height: 8em;
    }
    @media screen and (max-width: 590px){
        width: 6em;
        height: 6em;
    }
    
`