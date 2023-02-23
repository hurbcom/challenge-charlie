import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

interface BackgroundImageInterface {
  images?: Image[] | undefined;
}
interface Image {
  url?: string;
}

export async function getBackgroundImageFromBing(): Promise<
  string | undefined
> {
  try {
    const response = await api.get<BackgroundImageInterface>(
      `/HPImageArchive.aspx`,
      {
        params: { format: 'js', idx: '0', n: '1', mkt: 'pt-US' },
      }
    );

    const urlBackgroundImage = response.data.images[0].url;

    return `https://bing.com${urlBackgroundImage}`;
  } catch (error) {
    console.log(error);
    throw new Error('Faleid fetch background from api.');
  }
}
