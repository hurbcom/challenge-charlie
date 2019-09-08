// Import styled-component
import styled from 'styled-components';

// Import Utils
import Button from '../../atoms/button';
import Loader from '../../atoms/loader';
import { DARK_GRAY, GREEN } from '../../../utils/variables';

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
`;

export const Alert = styled.div`
    width: 100%;
    max-width: 500px;
    text-align: center;
`;

export const Icon = styled.img`
    max-width: 100px;
    margin-bottom: 20px;
`;

export const Text = styled.div`
    line-height: 1.7;
    margin-bottom: 20px;
    
    @media (min-width: 734px){
        font-size: 16px;
    }
`;

export const Form = styled.form`
    position: relative;
`;

export const FieldSelect = styled.select`
    width: 100%;
    height: 40px;
    border: 1px solid ${DARK_GRAY};
    padding: 0px 15px;
    font-size: 12px;
    outline: none;
    color: ${DARK_GRAY};
    margin-bottom: 10px;
    background: #FFFF;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    position: relative;
    background: #FFF url( '/static/images/arrow-down.svg' ) no-repeat center center;
    background-size: 18px;
    background-position: 97%;

    &:active,
    &:focus{
        border-color: ${GREEN};
    }

    &:disabled{
        opacity: 0.3;
        cursor: not-allowed;
        pointer-events: none;
    }
`;

export const ButtonCTA = styled(Button)`
    margin-top: 10px;
`;

export const Spinner = styled(Loader)`
    margin-top: 15px;
`;