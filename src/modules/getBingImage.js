import { axiosCors } from "modules/axiosCors";

export async function getBingImage(idx = 0) {
  const bingJson = await axiosCors(
    `https://www.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=1&mkt=pt-BR`
  ).then((resp) => resp.data);
  return `https://www.bing.com${bingJson.images[0].url}`;
}

if (process.env.NODE_ENV === "development") {
  window.getBingImage = getBingImage;
}
