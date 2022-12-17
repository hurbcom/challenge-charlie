import React from "react";
import { GetCustomerCurrentLocationControllerFactory } from "@challenge-charlie/frontend/weather-forecast/framework/factories/controllers";
import { GetCustomerCurrentLocationControllerContract } from "@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers"

type ControllersContextType = {
    getCurrentUserLocationController: GetCustomerCurrentLocationControllerContract,
}

const initialValue: ControllersContextType = {
    getCurrentUserLocationController: GetCustomerCurrentLocationControllerFactory.execute()
}

export const ControllersContext = React.createContext<ControllersContextType>(initialValue)

export type ControllersContextProvider = {
    children: JSX.Element
}

export function ControllersContextProvider({ children }: ControllersContextProvider) {
    return <ControllersContext.Provider value={initialValue}>
        { children }
    </ControllersContext.Provider>
}
