import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export async function getBackgroundImageFromBing() {
  try {
    const response = await api.get(`/HPImageArchive.aspx`, {
      params: { format: 'js', idx: '0', n: '1', mkt: 'pt-US' },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    console.log('response', response.data);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Faleid fetch background from api.');
  }
}
