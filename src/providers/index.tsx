import { BackgroundProvider } from "./background";

type Props = {
    children: JSX.Element | JSX.Element[];
};

const ContextProvider = ({ children }: Props) => {
    return <BackgroundProvider>{children}</BackgroundProvider>;
};

export default ContextProvider;
