export default async function getLocationName(latitude:number | null, longitude: number | null) {
    if (!latitude || !longitude) {
        throw new Error(
            `invalid coordinates lat: ${latitude} long: ${longitude}`
        );
    }
    const response = await fetch(
        `/get-location?latitude=${latitude}&longitude=${longitude}`
    );
    if (!response.ok) {
        throw new Error("Can't query for location");
    }
    const { city, state } = await response.json();
    return `${city}, ${state}`;
}