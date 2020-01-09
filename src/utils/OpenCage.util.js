
import axios from 'axios';

export default {

  async convert(lat, long) {
    try {
      const opencage = 'https://api.opencagedata.com';
      const key = 'c63386b4f77e46de817bdf94f552cddf';
      const res = await axios.get(`${opencage}/geocode/v1/json?q=${lat},${long}&key=${key}`);
      if (!res || !res.data) return;
      return res.data.results[0].components;
    } catch (e) {
      throw new Error(e);
    }
  },

};
