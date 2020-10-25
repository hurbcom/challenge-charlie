import { Api } from 'api/client';
import { retryBackoff } from 'lib/exponentialBackoff';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { BingBackgroundImagePayload } from './types';

export const bingBackgroundImageExternal = {
  fetchBackgroundImageUrl: () => {
    return Api.get<BingBackgroundImagePayload>(`/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`, {
      baseURL: process.env.NEXT_PUBLIC_BING_URL,
    }).pipe(
      retryBackoff({ initialInterval: 3000 }),
      map<AxiosResponse<BingBackgroundImagePayload>, string>(rawData => {
        const path = rawData.data?.images?.[0]?.url;
        return path ? `${process.env.NEXT_PUBLIC_BING_URL}${path}` : null;
      }),
    );
  },
};
