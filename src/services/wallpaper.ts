import { BingWallpaperResponseAPI } from '~/@types/bing';

const BING_BASE_URL = 'https://www.bing.com';

export async function getWallpaper() {
  const bingWallpaperURL = `${BING_BASE_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

  try {
    const response = await fetch(bingWallpaperURL);
    const parsedResponse = (await response.json()) as BingWallpaperResponseAPI;

    const todayWallpaper = parsedResponse.images[0];

    return {
      src: `${BING_BASE_URL}${todayWallpaper.url}`,
      alt: todayWallpaper.copyright,
    };
  } catch {}
}
