import { StateContextProvider } from "@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts";
import { ErrorBoundaryComponent } from "./error-boundary/error-boundary.component";
import { ForecastOverviewComponent } from "./forecast-overview/forecast-overview.component";

export function ContainerComponent() {
  return (
    <ErrorBoundaryComponent>
      <StateContextProvider>
        <ForecastOverviewComponent />
      </StateContextProvider>
    </ErrorBoundaryComponent>
  );
}
