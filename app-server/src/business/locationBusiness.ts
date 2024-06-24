import fetch from 'node-fetch';
import config from '../config/config';

class LocationBusiness {
    //Function responsible for returning the city based on latitude and longitude.
    async getLocationByCoordinates(latitude: string, longitude: string) {
        try {
            const response = await fetch(config.OPEN_CAGE_API
                + '/geocode/v1/json?q=' + latitude + ',' + longitude + '&key=' + config.OPEN_CAGE_API_KEY);
            const data = await response.json();
            // If a city is not found, it returns a town, as locations are classified differently within the API.
            return data.results[0].components.city ?? data.results[0].components.town

        } catch (error) {
            console.error('Error fetching location:', error);
            throw new Error('Failed to fetch location');
        }
    }
}

export default LocationBusiness;
