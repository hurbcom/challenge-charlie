import axios from "axios";

export function axiosCors(url, ...args) {
  return axios({
    url: "https://api.allorigins.win/get",
    params: {
      url,
    },
  }).then((resp) => {
    resp.data = JSON.parse(resp.data.contents);
    return resp;
  });
}

if (process.env.NODE_ENV === "development") {
  window.axiosCors = axiosCors;
}
