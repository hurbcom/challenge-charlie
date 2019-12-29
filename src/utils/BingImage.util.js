
import axios from 'axios';

export default {

  async get() {
    try {
      const bing = 'https://www.bing.com';
      const cors = 'https://cors-anywhere.herokuapp.com/';
      const res = await axios.get(`${cors + bing}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`);
      return bing + res.data.images[0].url;
    } catch (e) {
      throw new Error(e);
    }
  },

};
