import { useEffect } from "react";

import styled from "styled-components";
import useBingWallpapper from "hooks/useBingWallpapper";
import Weather from "components/Weather";

const AppBase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

const Copyright = styled.div`
    font-size: 9px;
    font-weight: 200;
    width: 50%;
    padding: 4px;
`;

const App = () => {
    const { loadWallpaperOfDay, wallpapper } = useBingWallpapper();

    useEffect(() => {
        if (!!wallpapper?.url) {
            document.body.style.setProperty(
                "--body-background-image",
                `url(${wallpapper.url})`
            );
        }
    }, [wallpapper]);

    useEffect(() => {
        loadWallpaperOfDay();
    }, []);

    return (
        <>
            <AppBase>
                <Weather />
                {!!wallpapper?.copyright ? (
                    <Copyright>{wallpapper?.copyright}</Copyright>
                ) : null}
            </AppBase>
        </>
    );
};

export default App;
