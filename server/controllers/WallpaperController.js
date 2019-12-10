import api from '../services/ApiWallpaper';

export default async function WallpaperController(req, res) {
  try {
    const { data } = await api.get();
    const urlWallpaper = `url('https://www.bing.com${data.images[0].url}')`;
    return res.json(urlWallpaper);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
}
