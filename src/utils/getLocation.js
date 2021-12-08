export const getLocation = () => {
    const url = new URL(window.location.href);
    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");

    return {
        lat,
        lon
    }
};