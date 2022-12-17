import { Address } from "@challenge-charlie/frontend/weather-forecast/enterprise/entities";

type GeolocationComponentProps = {
    address?: Address
}

function GeolocationComponent({ address }: GeolocationComponentProps) {
    return <div className="bg-gray-400 p-1">
        { address?.city }
    </div>
}

export {
    GeolocationComponent
}