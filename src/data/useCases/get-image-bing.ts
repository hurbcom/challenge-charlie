import { bingImageModel } from "@/domain/models/bing-image-model";
import { HttpResponse } from "../http/http-client";

export interface GetImageBing {
    get: () => Promise<HttpResponse<bingImageModel>>;
}