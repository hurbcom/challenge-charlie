const getDirections = (angle: number) => {
    const dir = [
        'N', 'NNE', 'NE', 'ENE', 'E',
        'ESE', 'SE', 'SSE', 'S', 'SSO',
        'SO', 'OSO', 'O', 'ONO', 'NO', 'NNO'
    ];
    const index = Math.round(angle / 22.5) % 16;
    return dir[index];
}
export default getDirections