import { memo, useCallback, useEffect, useState } from "react";

import "./Styles/global.css";
import { AppStyle } from "./Styles/app";
import env from "react-dotenv";
import GoogleService from "./Services/google";
import { CardWeather } from "./Components/Card";

export const App = memo(() => {
    const [nameLocale, setNameLocale] = useState(null);
    useEffect(() => {
        async function getLocation() {
            if (!("geolocation" in navigator)) {
                return alert("Navegador não compativel com geolocalização");
            }

            navigator.geolocation.getCurrentPosition(
                async ({ coords: { latitude, longitude } }) => {
                    const {
                        data: { results },
                    } = await GoogleService.getLocationGoogle(
                        latitude,
                        longitude,
                        env.KEY_API
                    );

                    setNameLocale(
                        `${results[6].address_components[0].long_name}, ${results[6].address_components[1].long_name}`
                    );

                    console.log("results", results);
                },
                (error) => {
                    return alert(`Error: ${error}`);
                }
            );
        }

        getLocation();
    }, []);

    const handleChange = useCallback((value) => {}, []);

    const handleOnBlur = useCallback(() => {}, []);
    return (
        <>
            <AppStyle>
                <CardWeather
                    nameLocale={nameLocale}
                    handleChange={handleChange}
                    handleOnBlur={handleOnBlur}
                />
            </AppStyle>
        </>
    );
});
