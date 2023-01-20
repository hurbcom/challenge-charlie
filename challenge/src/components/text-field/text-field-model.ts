import { ChangeEventHandler } from "react";

type TextFieldModel = {
    id: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    stopTyping: (event: string) => void;
};

export default TextFieldModel;
