export default function getWindDirection(deg) {
    const directions = [
        { name: 'N', minDeg: 348.75, maxDeg: 11.25 },
        { name: 'NNE', minDeg: 11.25, maxDeg: 33.75 },
        { name: 'NE', minDeg: 33.75, maxDeg: 56.25 },
        { name: 'ENE', minDeg: 56.25, maxDeg: 78.75 },
        { name: 'L', minDeg: 78.75, maxDeg: 101.25 },
        { name: 'ESE', minDeg: 101.25, maxDeg: 123.75 },
        { name: 'SE', minDeg: 123.75, maxDeg: 146.25 },
        { name: 'SSE', minDeg: 146.25, maxDeg: 168.75 },
        { name: 'S', minDeg: 168.75, maxDeg: 191.25 },
        { name: 'SSO', minDeg: 191.25, maxDeg: 213.75 },
        { name: 'SO', minDeg: 213.75, maxDeg: 236.25 },
        { name: 'OSO', minDeg: 236.25, maxDeg: 258.75 },
        { name: 'O', minDeg: 258.75, maxDeg: 281.25 },
        { name: 'ONO', minDeg: 281.25, maxDeg: 303.75 },
        { name: 'NO', minDeg: 303.75, maxDeg: 326.25 },
        { name: 'NNO', minDeg: 326.25, maxDeg: 348.75 },
    ];

    for(let direction of directions) {
        if (deg >= direction.minDeg && deg < direction.maxDeg) {
            return direction.name;
        }
    }

    if ((deg >= directions[0].minDeg && deg <= 360) || (deg >= 0 && deg < directions[0].maxDeg)) {
        return 'N';
    }
}