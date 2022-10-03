import * as axios from 'axios';
import { BingImageArchiveResponse } from "./BingImageArchiveResponse";

export class BingApi
{
    static async getImageArchive(format='js', mkt='pt-BR', last_n=1, index=0): Promise<BingImageArchiveResponse>
    {
        const res = await axios.default.get(`/HPImageArchive.aspx?format=${format}&idx=${index}&n=${last_n}&mkt=${mkt}`);
        return res.data;
    }
}