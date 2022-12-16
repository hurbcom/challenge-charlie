import { CurrentForecastOverviewComponent } from "../current-forecast-details/current-forecast-details.component"
import { FutureForecastsOverviewComponent } from "../future-forecasts-overview/future-forecasts-overview.component"
import { GeolocationComponent } from "../geolocation/geolocation.component"

function ForecastOverviewComponent() {
    
    return <div className="bg-red-900 grid grid-rows-3 grid-cols-1">
        <GeolocationComponent />
        <CurrentForecastOverviewComponent />
        <FutureForecastsOverviewComponent />
    </div>
}

export {
    ForecastOverviewComponent
}