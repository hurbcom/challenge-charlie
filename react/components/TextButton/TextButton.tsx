import React, { PropsWithChildren } from "react";
import { Button } from "./style";

type TextButtonProps = PropsWithChildren & { onClick: () => void };

const TextButton = ({ children, onClick }: TextButtonProps) => {
    return (
        <Button role="button" onClick={onClick}>
            {children}
        </Button>
    );
};

export default TextButton;
