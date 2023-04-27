import React from "react";
import HeroImage from "@components/HeroImage";

import styled from "styled-components";
import useGetUserLocationName from "../hooks/useGetUserLocationName";
import ForecastContainer from "../containers/ForecastContainer";
import useGeolocation from "../hooks/useGeolocation";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    height: 100vh;
    flex-direction: column;
`;

const MainPage: React.FC = () => {
    const { data, isLoading } = useGeolocation();
    const { latitude = 0, longitude = 0 } = data || {};
    const locationNameQueryResult = useGetUserLocationName(
        latitude,
        longitude,
        isLoading
    );

    const userLocation = locationNameQueryResult.data || "";
    const hasErrorOnUserLocation = locationNameQueryResult.isError;
    const isLoadingUserLocation = locationNameQueryResult.isLoading;

    return (
        <>
            <HeroImage />
            <Content>
                <ForecastContainer
                    hasErrorOnUserLocation={hasErrorOnUserLocation}
                    isLoadingUserLocation={isLoadingUserLocation}
                    userLocation={userLocation}
                />
            </Content>
        </>
    );
};

export default MainPage;
