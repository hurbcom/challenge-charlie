export const getWindDirection = (degree) => {
        var val = Math.floor((degree / 22.5) + 0.5);
        var arr = ["N", "NNL", "NL", "LNL", "L", "LSL", "SL", "SSL", "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO"];
        return arr[(val % 16)];
}
