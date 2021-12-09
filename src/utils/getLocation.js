export const getLocation = () => {
    const url = new URL(window.location.href);
    const lat = url.searchParams.get("lat");
    const lng = url.searchParams.get("lng");

    return {
        lat,
        lng
    }
};