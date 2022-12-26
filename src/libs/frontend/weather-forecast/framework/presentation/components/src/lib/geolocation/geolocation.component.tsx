import { StateContext } from '@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts';
import { useContext } from 'react';

function GeolocationComponent() {
  const { changeLocation, location } = useContext(StateContext);
  console.log("🚀 ~ file: geolocation.component.tsx:6 ~ GeolocationComponent ~ location", location)

  if (!location || !location.address) return null

  return (
    <div className="bg-gray-100/60 p-2 text-gray-600 font-bold text-xl grid grid-cols-[auto_1fr_auto] gap-2">
      <div className="grid place-content-center">
        <i className="fa-solid fa-compass" />
      </div>
      <span className="overflow-ellipsis whitespace-nowrap overflow-hidden text-lg">
        {location.address.formatted}
      </span>
      <div className="grid place-content-center">
        <i className="fa-solid fa-edit" onClick={changeLocation} />
      </div>
    </div>
  );
}

export { GeolocationComponent };
