export const getWindDirection = (degree:number) => {
    const val = Math.floor((degree / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO"];
    return arr[(val % 16)];
}