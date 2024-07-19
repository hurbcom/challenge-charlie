import { useContext, useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Input from "../../components/Input";
import WeatherContainer from "../../components/WeatherContainer";
import {
  WeatherContext,
  WeatherContextType,
} from "../../contexts/WeatherProvider";
import useBackground from "../../queries/useBackground";
import useCurrentPlaceName from "../../queries/useCurrentPlaceName";
import useWeather from "../../queries/useWeather";
import { Container, MainContainer } from "./styles";

const Home = () => {
  const { coordinates, setCoordinates, unit, location, setLocation } =
    useContext(WeatherContext) as WeatherContextType;

  const { data: backgroundData } = useBackground();

  const { data: locationData } = useCurrentPlaceName({
    latitude: coordinates?.latitude,
    longitude: coordinates?.longitude,
  });

  const {
    data: weatherData,
    isLoading: weatherIsLoading,
    error,
  } = useWeather({
    query: location,
    unit: unit,
  });

  useEffect(() => {
    if (!weatherData && !weatherIsLoading && error)
      notifyError((error as Error).message);
  }, [weatherData, weatherIsLoading, error]);

  const notifyError = (message: string) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
        },
        (error) => {
          notifyError("Error getting user location");
        }
      );
    } else {
      notifyError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (locationData) {
      setLocation(
        `${locationData.city}, ${locationData.state}, ${locationData.country}`
      );
    } else {
      setLocation("");
    }
  }, [locationData]);

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <MainContainer id="app" role="main" $backgroundUrl={backgroundData?.url}>
      <Container>
        <Input />
        <WeatherContainer
          weathers={weatherData?.weathers}
          isLoading={weatherIsLoading}
        />
      </Container>
      <ToastContainer />
    </MainContainer>
  );
};

export default Home;
