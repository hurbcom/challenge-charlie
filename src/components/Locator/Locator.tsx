import React, { useEffect } from "react";
import { useStore } from "../../store/store";
import { fetchLocation } from "../../services/fetchService";

const Locator = () => {
  //Zustand hook alias
  const setLocation = useStore((state) => state.setLocation);
  const setLoading = useStore((state) => state.setLoading);
  const setCoords = useStore((state) => state.setCoords);
  const coords = useStore((state) => state.coords);
  const setError = useStore((state) => state.setError);
  const setErrorCode = useStore((state) => state.setErrorCode);

  const coordsEffect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (geolocation) => {
          setCoords({
            latitude: geolocation.coords.latitude,
            longitude: geolocation.coords.longitude,
          });
        },
        (error) => {
          setError();
          setErrorCode({
            erro: "ERRO NAS COORDENADAS",
            mensagem: error.message,
          });
          setLoading();
        }
      );
    }
  };

  const locationEffect = () => {
    if (coords.latitude) {
      fetchLocation(coords.latitude, coords.longitude)
        .then((data) => {
          setLocation({
            city: data.city,
            district: data.district,
            municipality: data.municipality,
            state: data.state,
          });
        })
        .catch((error) => {
          setError();
          setErrorCode({
            erro: "ERRO NA LOCALIZAÇÃO",
            mensagem: error.message,
          });
        });
    }
  };

  useEffect(coordsEffect, []);
  useEffect(locationEffect, [coords.latitude]);

  return <></>;
};

export default Locator;
