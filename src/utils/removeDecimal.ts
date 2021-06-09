export function removeDecimal(data: string) {
    let newData = data.split('.', 2);
    return newData[0];
}
