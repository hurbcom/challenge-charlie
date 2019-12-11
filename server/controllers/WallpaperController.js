import api from '../services/ApiWallpaper';

export default async function WallpaperController(req, res) {
  const { data } = await api.get();

  if (!data) {
    return res.status(400).json({ error: "Can't conect to Bing api" });
  }

  const urlWallpaper = `url('https://www.bing.com${data.images[0].url}')`;

  return res.json(urlWallpaper);
}
