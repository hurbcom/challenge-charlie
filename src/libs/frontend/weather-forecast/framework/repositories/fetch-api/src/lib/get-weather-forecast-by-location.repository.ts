import { environment } from "../environments/environment";

class GetWeatherForecastByLocationRepository: GetWeatherForecastByLocationRepositoryContract {

    public async execute(input: GetWeatherForecastByLocationRepositoryInput): Promise<GetWeatherForecastByLocationRepositoryOutput> {

        await fetch(`${environment.production}`)

    }
}
