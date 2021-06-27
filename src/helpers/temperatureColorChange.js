export default function temperatureColorChange(temperature) {
    if (temperature > 15 && temperature < 35){
        return "yellow";
    }

    if (temperature < 15) {
        return "blue";
    }

    if (temperature > 35) {
        return "red";
    }
}