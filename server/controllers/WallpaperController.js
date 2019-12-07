import api from '../services/ApiWallpaper';

export default async function WallpaperController(req, res) {
  const { data } = await api.get();

  const urlWallpaper = `url('https://www.bing.com${data.images[0].url}')`;

  return res.json(urlWallpaper);
}
