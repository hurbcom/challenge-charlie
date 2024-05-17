export const mphToKmh = (mph: number) => {
    const kmhValue = mph * 1.60934;
    return kmhValue.toFixed(2);
};
