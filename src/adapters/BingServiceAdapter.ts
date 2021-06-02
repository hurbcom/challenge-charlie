export default class BingServiceAdapter {
  getCurrentWallpaper(payload: any) {
    return payload.images?.[0]?.url;
  }
}
