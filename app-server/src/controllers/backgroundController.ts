import { Request, Response } from 'express';
import BackgroundBusiness from '../business/backgroundBusiness';

class BackgroundController {

    // Constructor method of the business class.
    private backgroundBusiness: BackgroundBusiness;
    constructor() {
        this.backgroundBusiness = new BackgroundBusiness();
    }

    // Calls the function from the business logic and returns the standard response model.
    getBackgroundImage = async (req: Request, res: Response) => {
        try {
            const imageData = await this.backgroundBusiness.getBackgroundImage();
            res.json({
                success: true,
                message: 'Background image fetched',
                data: imageData
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching background image');
        }
    }
}

export default BackgroundController;
