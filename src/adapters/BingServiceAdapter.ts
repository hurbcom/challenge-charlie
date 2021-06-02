export default class BingServiceAdapter {
  getCurrentWallpaper(payload: any) {
    return { backgroundImage: `https://www.bing.com${payload.images[0].url}` };
  }
}
