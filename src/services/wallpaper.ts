import { WallpaperProps } from '~/@types';

export async function getWallpaper() {
  try {
    const response = await fetch('/api/wallpaper');
    const parsedResponse = (await response.json()) as WallpaperProps;

    return parsedResponse;
  } catch {}
}
