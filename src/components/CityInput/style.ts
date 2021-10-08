import styled from 'styled-components';

export const InputHolder = styled.div<{ border: boolean }>`
    display: flex;
    flex: 1;
    background: #fff;
    border: ${({ border }) => (border ? '3px solid #ff0000' : 'none')};
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    opacity: 85%;
    box-shadow: 0 1px 5px #888888;
    z-index: 1;
`;

export const IconWrapper = styled.div`
    padding: 0 5px 0 5px;
`;

export const InputWrapper = styled.div`
    width: 100%;
`;

export const CustomInput = styled.input`
    width: 90%;
    border: none;
    font-size: 26px;
    font-weight: bold;
    color: #8d8986;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: rgb(183, 183, 183);
    }
`;
