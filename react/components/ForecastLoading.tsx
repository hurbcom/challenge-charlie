import React from "react";
import ForecastWrapper from "./ForecastWrapper";
import Spinner from "./Spinner";

function ForecastLoading() {
    return (
        <ForecastWrapper>
            <Spinner />
        </ForecastWrapper>
    );
}

export default ForecastLoading;
