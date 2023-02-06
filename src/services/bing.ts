import { IBingApi } from '../helpers/contracts/bing';
import { CoverImage } from '../helpers/models';
import { httpService } from './_http';

const bypassCorsUrl = process.env.BYPASS_CORS_URL;
const bingUrl = process.env.MICROSOFT_BING_URL;
const bingImageArchiveUrl = process.env.MICROSOFT_BING_IMAGE_ARCHIVE_URL;

export const getCoverImage = async (): Promise<CoverImage | null> => {
  const url = `${bypassCorsUrl}${bingUrl}${bingImageArchiveUrl}`;
  const result = await httpService.get<IBingApi.CoverImageResult>(url);

  if (!result) return null;

  return {
    title: result.images[0].title,
    copyright: result.images[0].copyright,
    url: `${bingUrl}${result.images[0].url}`,
  };
};
