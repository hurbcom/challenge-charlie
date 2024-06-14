import { MonitoringTool } from '@/services/monitoring';

export interface BingImage {
  startdate: string;
  fullstartdate: string;
  enddate: string;
  url: string;
  urlbase: string;
  copyright: string;
  copyrightlink: string;
  title: string;
  quiz: string;
  wp: boolean;
  hsh: string;
  drk: number;
  top: number;
  bot: number;
  hs: any[];
}

export interface BingImageResponse {
  images: BingImage[];
  tooltips: {
    loading: string;
    previous: string;
    next: string;
    walle: string;
    walls: string;
  };
}

export const fetchBingImageUrl = async (monitoring?: MonitoringTool): Promise<string> => {
  const response = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');

  if (!response.ok) {
    monitoring?.captureAndLogException(new Error('Failed to fetch the Bing image URL'));
    return '';
  }

  const data: BingImageResponse = await response.json();
  const imageUrl = `https://www.bing.com${data.images[0].url}`;

  return imageUrl;
};
