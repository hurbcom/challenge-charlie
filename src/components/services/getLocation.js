async function getLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocalização não é suportada pelo seu navegador');
  } else {
    const position = new Promise((resolve) => {
      return navigator.geolocation.getCurrentPosition((position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        resolve({ latitude, longitude });
      });
    })
    .catch((err) => console.log(err));
    return position;
  }
}
export default getLocation;
