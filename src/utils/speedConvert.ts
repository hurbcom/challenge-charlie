export const speedConvert = (speed: number): string => {
    const result = speed * 3.6;
    return result.toFixed(1);
};
