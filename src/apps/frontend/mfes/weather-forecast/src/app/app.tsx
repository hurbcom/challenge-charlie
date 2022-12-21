import { ErrorBoundaryComponent, ForecastOverviewComponent } from "@challenge-charlie/frontend/weather-forecast/framework/presentation/components";
import { StateContextProvider } from "@challenge-charlie/frontend/weather-forecast/framework/presentation/contexts";





export function App() {


  return (
    <ErrorBoundaryComponent>
      <StateContextProvider>
        <ForecastOverviewComponent />
      </StateContextProvider>
    </ErrorBoundaryComponent>
  );
}

export default App;
