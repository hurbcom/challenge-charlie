import React, { useEffect } from "react";
import { useStore } from "../state/store";
import { fetchAxios } from "../services/fetchService";

const Root = () => {
  //Zustand hook alias
  const setLocation = useStore((state) => state.setLocation);
  const setCoords = useStore((state) => state.setCoords);
  const store = useStore();

  const coordsEffect = () => {
    console.log("coordsEffect rodou");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCoords, (error) => {
        console.log(error);
      });
    }
  };

  const locationEffect = () => {
    if (store.coords.latitude) {
      console.log(store.coords.latitude);
      fetchAxios(
        `https://api.opencagedata.com/geocode/v1/json?q=${store.coords.latitude},${store.coords.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=pt&pretty=0&no_annotations=1`
      )
        .then((data) => {
          setLocation({
            country: data.results[0].components.country,
            state: data.results[0].components.state,
            city: data.results[0].components.city,
            district: data.results[0].components.district,
            municipality: data.results[0].components.municipality,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const weatherEffect = () => {
    if (store.coords.latitude) {
      console.log("em construção");
    }
  };

  useEffect(coordsEffect, []);
  useEffect(locationEffect, [store.coords.latitude]);
  useEffect(weatherEffect, [store.coords.latitude]);

  return (
    <>
      <div className="bg-black pt-3 pb-3 mr-52 ml-52 rounded-md">
        <p className="text-5xl text-white text-center">
          Parabéns, você não quebrou o app!
        </p>
        <p className="text-sm text-white text-center">...por enquanto.</p>
      </div>
      <p className="text-center">
        Latitude:{store.coords.latitude}, Longitude:
        {store.coords.longitude}
      </p>
      <p className="text-center">Você está no {store.location.city}</p>
    </>
  );
};

export default Root;
