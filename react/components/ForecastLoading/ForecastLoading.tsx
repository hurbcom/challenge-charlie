import React from "react";
import ForecastWrapper from "@components/ForecastWrapper";
import Spinner from "@components/Spinner";

function ForecastLoading() {
    return (
        <ForecastWrapper>
            <Spinner />
        </ForecastWrapper>
    );
}

export default ForecastLoading;
