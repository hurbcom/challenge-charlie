import { ContainerComponent } from '@challenge-charlie/frontend/shell/framework/presentation/components'
import React from "react";


export function App() {
  return (
    <React.Suspense>
      <ContainerComponent />
    </React.Suspense>
  );
}

export default App;
