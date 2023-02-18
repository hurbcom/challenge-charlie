import styled from "styled-components";

export const ContainerEmpty = styled.div`
    width: 50%;

    @media  screen and (max-width: 1366px) {
        width: 66%;
    }
    
    /* (1280x720) SXGA Display */
    @media  screen and (max-width: 1280px) {
        width: 68%;
    }
    
    /* (1440x900) WXGA+ Display */
    @media  screen and (min-width: 1440px) {
        width: 51%;
    }
    
    /* (1680x1050) WSXGA+ Display */
    @media  screen and (min-width: 1680px) {
        width: 64%;
    }
    
    /* (1920x1080) Full HD Display */
    @media  screen and (min-width: 1920px)  {
        width: 61%;
    }
`

export const Container = styled.div`
    display: flex;
    background-color: rgba(183, 148, 4, 0.9);    
    color: white;
    justify-content: space-evenly;
    height: 200px;
    padding: 10px 20px;

    @media  screen and (max-width: 1366px) {
        height: 135px;
        
    }
    
    /* (1280x1024) SXGA Display */
    @media  screen and (max-width: 1280px) {
        height: 130px;

    }
    
    /* (1440x900) WXGA+ Display */
    @media  screen and (min-width: 1440px) {
        height: 215px;
    }
    
    /* (1680x1050) WSXGA+ Display */
    @media  screen and (min-width: 1680px) {
        height: 210px;
    }
    
    /* (1920x1080) Full HD Display */
    @media  screen and (min-width: 1920px) {
        height: 200px;
    }
`;

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

export const TextContainer = styled.div`
    padding: 20px 40px;
`