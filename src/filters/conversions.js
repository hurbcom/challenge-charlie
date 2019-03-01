export default {
    setWindDirection(val) {
        if (val >= 0 && val <= 11.25) { return 'N'; }
        if (val > 11.25 && val <= 33.75) { return 'NNE'; }
        if (val > 33.75 && val <= 56.25) { return 'NE'; }
        if (val > 56.25 && val <= 78.75) { return 'LNE'; }
        if (val > 78.75 && val <= 101.25) { return 'L'; }
        if (val > 101.25 && val <= 123.75) { return 'LSE'; }
        if (val > 123.75 && val <= 146.25) { return 'SE'; }
        if (val > 146.25 && val <= 168.75) { return 'SSE'; }
        if (val > 168.75 && val <= 191.25) { return 'S'; }
        if (val > 191.25 && val <= 213.75) { return 'SSO'; }
        if (val > 213.75 && val <= 236.25) { return 'SO'; }
        if (val > 236.25 && val <= 258.75) { return 'OSE'; }
        if (val > 258.75 && val <= 281.25) { return 'O'; }
        if (val > 281.25 && val <= 303.75) { return 'ONO'; }
        if (val > 303.75 && val <= 326.25) { return 'NO'; }
        if (val > 326.25 && val <= 348.75) { return 'NNO'; }
    },

    setToCelsius(val) {
        var temperature = (val - 32) * 5 / 9;
        return Math.round(temperature);
    },

    setMedTemperature(low, high) {
        return ((low + high)) / 2;
    },

    setPressure(val) {
        return Math.round(val * 33.863886666667);
    },

    setWindSpeed(val) {
        return Math.round(val * 3.6);
    },

    setRoundVal(val) {
        return Math.round(val);
    }
}