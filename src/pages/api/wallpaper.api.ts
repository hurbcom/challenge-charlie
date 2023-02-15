import type { NextApiRequest, NextApiResponse } from 'next';

import { BingWallpaperResponseAPI } from '~/@types';

const BING_BASE_URL = 'https://www.bing.com';

async function getWallpaper(_: NextApiRequest, res: NextApiResponse) {
  try {
    const bingWallpaperURL = `${BING_BASE_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

    const response = await fetch(bingWallpaperURL);
    const parsedResponse = (await response.json()) as BingWallpaperResponseAPI;

    if (!parsedResponse.images || parsedResponse.images.length === 0) {
      return res.status(404).json({
        message: 'Out of wallpapers',
      });
    }

    const todayWallpaper = parsedResponse.images[0];

    return res.status(200).json({
      src: `${BING_BASE_URL}${todayWallpaper.url}`,
      alt: todayWallpaper.copyright,
    });
  } catch (error) {
    return res.status(503).json({
      message: `Something went wrong with wallpaper supplier, Error: ${(error as Error).message}`,
    });
  }
}

export default getWallpaper;
