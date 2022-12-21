import { StateContext } from '@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts';
import { useContext } from 'react';
import classNames from 'classnames'

export function SearchLocationByAddressComponent() {
  const {
    addressInputOnChange,
    getLocationByAddress,
    getLocationByCoordinates,
    userDeniedLocation,
    address,
    error,
  } = useContext(StateContext);

  return (
    <div className="grid grid-rows-[auto_auto] gap-2">
      {userDeniedLocation && (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">
            <i className="fa-solid fa-triangle-exclamation mr-2"></i>A
            localização automática está desativada!
          </p>
        </div>
      )}
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">
            <i className="fa-solid fa-xmark mr-2"></i>
            {error}
          </p>
        </div>
      )}
      <div className="p-6 rounded-lg shadow-lg bg-white grid gap-2 grid-rows-[auto_auto_auto]">
        <p className="font-medium leading-tight text-base mt-0 mb-0">
          Digite abaixo um endereço para continuar
        </p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Endereço..."
          value={address}
          onChange={addressInputOnChange}
        />
        <button
          disabled={address.length < 3}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${classNames({
            'pointer-events-none': address.length < 3,
            'opacity-60': address.length < 3,
          })}`}
          onClick={getLocationByAddress}
        >
          buscar
        </button>
        {!userDeniedLocation && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={getLocationByCoordinates}
          >
            usar minha localização
          </button>
        )}

        <button onClick={() => {
            const event = new CustomEvent<{ userDeniedLocation: boolean }>('weather-forecast-event', {
                detail: {
                    userDeniedLocation,
                }
            })

            window.document.dispatchEvent(event)
        }}>LOL</button>
      </div>
    </div>
  );
}
