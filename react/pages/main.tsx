import React from "react";
import ForecastContainer from "@containers/ForecastContainer";
import HeroImage from "@components/HeroImage";
import useGetUserLocationName from "@hooks/useGetUserLocationName";
import useGeolocation from "@hooks/useGeolocation";

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
            <ForecastContainer
                hasErrorOnUserLocation={hasErrorOnUserLocation}
                isLoadingUserLocation={isLoadingUserLocation}
                userLocation={userLocation}
            />
        </>
    );
};

export default MainPage;
