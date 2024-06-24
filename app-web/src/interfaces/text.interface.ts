import { IChildrenProps } from "./childrenProps.interface"
import { TextType } from "./types";

export interface ITextProps extends IChildrenProps {
    className?: string;
    as?: TextType;
    onClick?: () => void
}