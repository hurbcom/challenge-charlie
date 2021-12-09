import styled from "styled-components";

const styleExtend = styled.div`
    height: auto;
    margin: 0 auto;
    padding: 30px;
	display: flex;
    flex-direction: row;
    background-color: ${props => props.color};    

    div {
        display: flex;
        flex: 1;
        align-items: center;
    }

    div:nth-child(2) {
        justify-content: flex-end;
    } 

    div:nth-child(3) {
        justify-content: center;
    } 
`;

export const Today = styled.div`
    height: auto;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px; 
    background-color: ${props => props.color};
`;

export const Tomorrow = styled(styleExtend)`
    justify-content: flex-end;
`;

export const AfterTomorrow = styled(styleExtend)`
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;       
`;

export const Icon = styled.img`
    height: ${props => props.height};  
`