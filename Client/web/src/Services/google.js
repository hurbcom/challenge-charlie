import axios from 'axios';

class GoogleService {
  getLocationGoogle(latitude, longitude, key) {
    return axios.post(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${key}`
    );
  }
}

export default new GoogleService();
