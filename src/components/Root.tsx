import React, { useEffect, useState } from "react";
import useStore from "../state/store";
import { Coordinates } from "../types";

const Root = () => {
  const store = useStore();

  let coor: Coordinates = {
    latitude: 0,
    longitude: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        coor.latitude = position.coords.latitude;
        coor.longitude = position.coords.longitude;
        store.setCoordinates(coor);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const logging = () => {
    console.log(store.coordinates);
  };

  return (
    <>
      <p className="text-5xl text-teal-500 text-center">
        Parabéns, você não quebrou o app!
      </p>
      <p className="text-sm text-teal-500 text-center">ainda</p>
      <p className="text-center">
        As coordenadas são {store.coordinates.latitude},{" "}
        {store.coordinates.longitude}
      </p>
    </>
  );
};

export default Root;
