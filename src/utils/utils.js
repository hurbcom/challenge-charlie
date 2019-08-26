import { exportDefaultSpecifier } from "@babel/types";

export const getWindDirection = (degree) => {
        const val = Math.floor((degree / 22.5) + 0.5);
        const arr = ["N", "NNL", "NL", "LNL", "L", "LSL", "SL", "SSL", "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO"];
        return arr[(val % 16)];
}

export const getWindSpeedInKilometers = (speed) => {
    const val = Math.floor(speed * 3.6);
    return val;
}

export const getTempColor = (temp) => {
    switch(temp){
        case (temp > 35): 
            return "red-background";
        case (temp < 15):
            return "blue-background";
        default:
            return "yellow-background";
    }
}
