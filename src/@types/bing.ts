export interface BingWallpaperAPIResponse {
  images: Array<{ url: string; copyright: string }>;
}

export interface WallpaperProps {
  src: string;
  alt: string;
}
