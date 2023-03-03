import type { NextApiRequest, NextApiResponse } from 'next';

import { BingWallpaperAPIResponse, WallpaperProps } from '~/@types';

export type GetWallpaperResponse = WallpaperProps | { message: string };

const BING_BASE_URL = 'https://www.bing.com';

async function getWallpaper(req: NextApiRequest, res: NextApiResponse<GetWallpaperResponse>) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  try {
    const bingWallpaperURL = `${BING_BASE_URL}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

    const response = await fetch(bingWallpaperURL);
    const parsedResponse = (await response.json()) as BingWallpaperAPIResponse;

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
    const message = (error as Error)?.message;

    return res.status(503).json({
      message: `Something went wrong with wallpaper API${!!message ? `, Error: ${message}` : ''}`,
    });
  }
}

export default getWallpaper;
