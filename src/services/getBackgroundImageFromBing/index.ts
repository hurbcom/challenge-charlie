import axios from 'axios';

export interface BackgroundImageInterface {
  images?: Image[];
}
export interface Image {
  url?: string;
}

export default async function getBackgroundImageFromBing(): Promise<Image> {
  try {
    const response = await axios.get<BackgroundImageInterface>(
      `${process.env.REACT_APP_REVERSE_PROXY_URL}/HPImageArchive.aspx`,
      {
        params: { format: 'js', idx: '0', n: '1', mkt: 'pt-US' }
      }
    );

    const urlBackgroundImage = response.data.images[0].url;

    return { url: `https://bing.com${urlBackgroundImage}` };
  } catch (error) {
    throw new Error('Faleid fetch background from api.');
  }
}
