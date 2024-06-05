import axios from "axios";

export const geoLocationRequests = async (latitude, longitude) => {
    const baseURL = "http://localhost:3005";

    try {
        const response = await axios.post(
            `${baseURL}/geolocation`,
            {
                latitude: latitude,
                longitude: longitude,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error response:", error.response.data);
            throw new Error(
                "Network response was not ok: " + error.response.data
            );
        } else if (error.request) {
            console.error("Error request:", error.request);
            throw new Error("No response from server");
        } else {
            console.error("Error setting up your request:", error.message);
            throw new Error("Error setting up your request: " + error.message);
        }
    }
};