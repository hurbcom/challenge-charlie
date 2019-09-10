// Import styled-component
import styled from 'styled-components';

// Import Utils
import Loader from '../../atoms/loader';

// Export componentes
export const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    background: ${props => `url(${props.bg}) no-repeat top center`};
    background-size: cover;
`;

export const Wrapper = styled.div`
    max-width: 656px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    text-align: center;
    color: #8d8986;
    padding: 7px 0px 10px;
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.3);

    @media (min-width: 734px){
        padding: 7px 0px 3px;
    }
`;

export const IconHeader = styled.div`
    display: inline-block;
    font-size: 20px;
    vertical-align: middle;

    @media (min-width: 375px){
        margin-right: 10px;
    }

    @media (min-width: 734px){
        font-size: 60px;
        margin-right: 20px;
    }
`;

export const UserState = styled.div`
    display: inline-block;
    font-size: 16px;
    vertical-align: middle;
    font-weight: 600;

    @media (min-width: 734px){
        font-size: 33px;
    }
`;

export const BoxDays = styled.div`
    width: 100%;
    color: #FFF;
    height: calc( 100% - 99px );
`;

export const BoxSpinner = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Spinner = styled(Loader)`
    margin-bottom: 15px;

    > div:after{
        width: 42px;
        height: 42px;
        border-width: 5px;
    }
`;

export const TextLoad = styled.div`
    max-width: 200px;
    text-align: center;
    font-size: 15px;
`;