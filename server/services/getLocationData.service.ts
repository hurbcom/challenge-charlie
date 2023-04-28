export default async function getLocationData(
    latitude: string,
    longitude: string
) {
    const url = `${process.env.OPEN_CAGE_API_URL}?q=${latitude},${longitude}&key=${process.env.OPEN_CAGE_API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        const e = await response.json();
        throw e;
    }
    const { results } = await response.json();
    if (!results || results.length < 1) {
        throw new Error("Coordinates not found");
    }
    const { city, state } = results[0].components;
    return { city, state };
}
