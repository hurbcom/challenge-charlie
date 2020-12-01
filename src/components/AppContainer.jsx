import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useBackground } from "../hooks/backgroundBing";

const AppContainer = ({ children }) => {
    const { backgroundImage, getBackground, loading } = useBackground();
    useEffect(() => {
        getBackground();
    }, []);

    return (
        <>
            {loading ? (
                <div
                    className="app_container"
                    data-testid="AppContainer-onLoading"
                >
                    <ReactLoading
                        className="app-container__loading"
                        type="spokes"
                        height={"16vmin"}
                        width={"16vmin"}
                    />
                </div>
            ) : (
                <div
                    className="app_container"
                    data-testid="AppContainer-loaded"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default AppContainer;
