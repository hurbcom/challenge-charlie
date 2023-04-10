import { CityModel, LocationModel } from "@/domain/models/city";
import { HttpResponse } from "../http/http-client";

export interface GetLocalCity {
    get: (location: LocationModel) => Promise<HttpResponse<CityModel> | any>
}