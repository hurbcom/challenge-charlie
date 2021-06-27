export default function windDirection(degree) {
    let sectors = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NE'];
    degree += 22.5;

    if (degree < 0) {
        degree = 360 - Math.abs(degree) % 360;
    } else {
        degree = degree % 360;
    }

    let which = parseInt(degree / 45);
    return sectors[which];
}