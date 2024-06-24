import { Request, Response } from 'express';
import LocationBusiness from '../business/locationBusiness';

class LocationController {

    // Constructor method of the business class.
    private locationBusiness: LocationBusiness;
    constructor() {
        this.locationBusiness = new LocationBusiness();
    }

    // Calls the function from the business logic and returns the standard response model.
    getLocation = async (req: Request, res: Response) => {
        try {
            const latitude = req.query.latitude as string
            const longitude = req.query.longitude as string
            const city = await this.locationBusiness.getLocationByCoordinates(latitude, longitude);
            res.json({
                success: true,
                message: 'Location fetched',
                data: city
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching location');
        }
    }
}

export default LocationController;
