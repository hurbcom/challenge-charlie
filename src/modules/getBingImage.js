import { fetchCors } from "modules/fetchCors";

async function getBingImage(idx = 0) {
  const bingJson = await fetchCors(
    `https://www.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=1&mkt=pt-BR`
  ).then((resp) => JSON.parse(resp));
  return `https://www.bing.com${bingJson.images[0].url}`;
}

if (process.env.NODE_ENV === "development") {
  window.getBingImage = getBingImage;
}
