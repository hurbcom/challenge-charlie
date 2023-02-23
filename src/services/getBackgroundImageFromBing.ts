import axios from 'axios';

// interface BackgroundImageInterface {
//   images?: Image[];
//   tooltips?: any;
// }

// interface Image {
//   url?: string;
//   startdate: string;
//   fullstartdate: string;
//   enddate: string;
//   urlbase: string;
//   copyright: string;
//   copyrightlink: string;
//   title: string;
//   quiz: string;
//   wp: boolean;
//   hsh: string;
//   drk: number;
//   top: number;
//   bot: number;
//   hs: any[];
// }

const api = axios.create({
  baseURL: `https://www.bing.com`,
});

export async function getBackgroundImageFromBing() {
  try {
    const response = await api.get(`/HPImageArchive.aspx`, {
      params: { format: 'js', idx: '0', n: '1', mkt: 'pt-US' },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    console.log('data', data);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Faleid fetch background from api.');
  }
}
