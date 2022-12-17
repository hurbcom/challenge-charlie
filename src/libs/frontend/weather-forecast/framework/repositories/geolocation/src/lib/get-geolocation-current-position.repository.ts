import { GetGeolocationCurrentPositionRepositoryContract } from "@challenge-charlie/frontend/weather-forecast/application/contracts/repositories"


export class GetGeolocationCurrentPositionRepository implements GetGeolocationCurrentPositionRepositoryContract {

    public async execute(): Promise<any> {
        const getCurrentPositionTask = new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position)
            }, (error) => {
                reject(error)
            })
        })

        const { coords } = await getCurrentPositionTask

        return {
            latitude: coords.latitude,
            longitude: coords.longitude
        }
    }

}