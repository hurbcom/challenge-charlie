import { BackgroundProvider } from "./background";
import { LocationProvider } from "./location";

type Props = {
    children: JSX.Element | JSX.Element[];
};

const ContextProvider = ({ children }: Props) => {
    return (
        <BackgroundProvider>
            <LocationProvider>{children}</LocationProvider>
        </BackgroundProvider>
    );
};

export default ContextProvider;
