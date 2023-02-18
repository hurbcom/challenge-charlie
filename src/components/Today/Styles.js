import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: rgba(237, 184, 20, 0.9);    
    justify-content: space-evenly;
    color: white;
    height: 439px;

    @media  screen and (max-width: 1366px) {
        height: 387px;
    }
    
    /* (1280x1024) SXGA Display */
    @media  screen and (max-width: 1280px) {
        height: 350px;
    }
    
    /* (1440x900) WXGA+ Display */
    @media  screen and (min-width: 1440px) {
        height: 519px;
    }
    
    /* (1680x1050) WSXGA+ Display */
    @media  screen and (min-width: 1680px) {
        height: 500px;
    }
    
    @media  screen and (min-width: 1920px) {
        height: 550px;
    }
`;

export const IconContainer = styled.div`
    display: flex ;
    align-items: center;
    justify-content: center;
    width: 50%;
`

export const TextContainer = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;

    @media  screen and (min-width: 1366px) {
        font-size: 25px;
    }
    
    /* (1280x1024) SXGA Display */
    @media  screen and (max-width: 1280px) {
        font-size: 25px;

    }
    
    /* (1440x900) WXGA+ Display */
    @media  screen and (min-width: 1440px) {
        font-size: 30px;

    }
    
    /* (1680x1050) WSXGA+ Display */
    @media  screen and (min-width: 1680px) {
        font-size: 30px;
    }
    
    /* (1920x1080) Full HD Display */
    @media  screen and (min-width: 1920px) {
        font-size: 35px;
    }

`
export const TextDescription = styled.p`
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 500;

    @media  screen and (max-width: 1366px) {
        font-size: 30px;
    }
    
    /* (1280x1024) SXGA Display */
    @media  screen and (max-width: 1280px) {
        font-size: 30px;
        
    }
    
    /* (1440x900) WXGA+ Display */
    @media  screen and (min-width: 1440px) {
        font-size: 35px;
    }
    
    /* (1680x1050) WSXGA+ Display */
    @media  screen and (min-width: 1680px) {
        font-size: 35px;
    }
    
    /* (1920x1080) Full HD Display */
    @media  screen and (min-width: 1920px) {
        font-size: 40px;

    }

`

export const TextInfo = styled.div`
    font-size: 30px;
    font-weight: 500;

    @media  screen and (max-width: 1366px) {
        font-size: 25px;
    }
    
    /* (1280x1024) SXGA Display */
    @media  screen and (max-width: 1280px) {
        font-size: 25px;        
    }
    
    /* (1440x900) WXGA+ Display */
    @media  screen and (min-width: 1440px) {
        font-size: 30px;

    }
    
    /* (1680x1050) WSXGA+ Display */
    @media  screen and (min-width: 1680px) {
        font-size: 30px;
    }
    
    /* (1920x1080) Full HD Display */
    @media  screen and (min-width: 1920px) {
        font-size: 35px;
    } 
`