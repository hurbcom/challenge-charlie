import { CoverImage } from '../models';

export namespace IBingApi {
  export type CoverImageResult = {
    images: Array<CoverImage>;
  };
}
