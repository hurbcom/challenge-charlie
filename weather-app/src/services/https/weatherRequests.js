import axios from "axios";

const baseURL = "http://localhost:3005";

export const weatherRequests = async (latitude, longitude) => {
    try {
        const response = await axios.post(
            `${baseURL}/weather`,
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
                "Network response was not ok: " + error.response.data.message
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

export const weatherByCityRequests = async (cityName) => {
    try {
        const response = await axios.post(
            `${baseURL}/weather/by-city`,
            { cityName: cityName },
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
                "Network response was not ok: " + error.response.data.message
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

export const weatherCurrentRequests = async (latitude, longitude) => {
    try {
        const response = await axios.post(
            `${baseURL}/weather`,
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
                "Network response was not ok: " + error.response.data.message
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