export default function windSpeedConverter(wind) {
    const windSpeed = parseFloat(wind);
    return windSpeed * 1.852;
}