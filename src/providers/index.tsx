import { BackgroundProvider } from "./background";
import { LocationProvider } from "./location";
import { WeatherProvider } from "./weather";

type Props = {
    children: JSX.Element | JSX.Element[];
};

const ContextProvider = ({ children }: Props) => {
    return (
        <WeatherProvider>
            <LocationProvider>
                <BackgroundProvider>{children}</BackgroundProvider>
            </LocationProvider>
        </WeatherProvider>
    );
};

export default ContextProvider;
