import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    color: white;
    cursor: pointer;
`;

type TextButtonProps = PropsWithChildren & { onClick: () => void };

const TextButton = ({ children, onClick }: TextButtonProps) => {
    return (
        <Button role="button" onClick={onClick}>
            {children}
        </Button>
    );
};

export default TextButton;
