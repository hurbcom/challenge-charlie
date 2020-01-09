export default {

  success: (resolve) => (pos) => {
    resolve(pos.coords);
  },

  error: (reject) => (err) => {
    reject(err);
  },

  get() {
    return new Promise((resolve, reject) => {
      n.geolocation.getCurrentPosition(this.success(resolve), this.error(reject))
    })
  },

};