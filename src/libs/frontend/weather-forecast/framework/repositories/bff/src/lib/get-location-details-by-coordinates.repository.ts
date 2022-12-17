import { GetLocationDetailsByCoordinatesRepositoryContract, GetLocationDetailsByCoordinatesRepositoryInput, GetLocationDetailsByCoordinatesRepositoryOutput } from "@challenge-charlie/frontend/weather-forecast/application/contracts/repositories";
import { environment } from "../environments/environment";

export class GetLocationDetailsByCoordinatesRepository implements GetLocationDetailsByCoordinatesRepositoryContract {
    
    public async execute({ latitude, longitude }: GetLocationDetailsByCoordinatesRepositoryInput): Promise<GetLocationDetailsByCoordinatesRepositoryOutput> {        
        
        const url = `${environment.bffs.weatherForecast.baseUrl}${environment.bffs.weatherForecast.endpoints.locationDetails}`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ latitude, longitude })
        });

        const { data } = await response.json()

        console.log("🚀 ~ file: get-location-details-by-coordinates.repository.ts:19 ~ GetLocationDetailsByCoordinatesRepository ~ execute ~ data", data)

        return {
            location: {
                address: data.address,
                currency: data.currency,
                weatherForecast: data.weather
            }
        }
    }
}