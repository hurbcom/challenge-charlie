const apiKey = "c63386b4f77e46de817bdf94f552cddf";

export async function getOpenCageByLatLng(latitude, longitude) {
  const resp = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
  );
  return await resp.json();
}

if (process.env.NODE_ENV === "development") {
  window.getOpenCageByLatLng = getOpenCageByLatLng;
}
