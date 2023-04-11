const getDirections = (angle: number) => {
    const dir = [
        'N', 'NNE', 'NE', 'ENE', 'E',
        'ESE', 'SE', 'SSE', 'S', 'SSO',
        'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'
    ];
    const normalizedAngle = angle % 360 + (angle < 0 ? 360 : 0);
    const index = Math.round(normalizedAngle / 22.5) % 16;
    return dir[index];
};
export default getDirections