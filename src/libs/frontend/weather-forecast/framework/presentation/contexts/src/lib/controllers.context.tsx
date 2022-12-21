import React from "react";
import { GetCustomerCurrentLocationControllerFactory, GetCustomerLocationByAddressControllerFactory } from "@challenge-charlie/frontend/weather-forecast/framework/factories/controllers";
import { GetCustomerCurrentLocationControllerContract, GetCustomerLocationByAddressControllerContract } from "@challenge-charlie/frontend/weather-forecast/adapter/contracts/controllers"

type ControllersContextType = {
    getCurrentUserLocationController: GetCustomerCurrentLocationControllerContract,
    getLocationByAddressController: GetCustomerLocationByAddressControllerContract,
}

const initialValue: ControllersContextType = {
    getCurrentUserLocationController: GetCustomerCurrentLocationControllerFactory.execute(),
    getLocationByAddressController: GetCustomerLocationByAddressControllerFactory.execute()
}

export const ControllersContext = React.createContext<ControllersContextType>(initialValue)

export type ControllersContextProviderProps = {
    children: JSX.Element
}

export function ControllersContextProvider({ children }: ControllersContextProviderProps) {
    return <ControllersContext.Provider value={initialValue}>
        { children }
    </ControllersContext.Provider>
}
