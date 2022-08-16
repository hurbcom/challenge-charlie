export interface IOpenCageResponseResult {
  components: {
    city: string;
    state: string;
  };
}

export interface IOpenCageResponse {
  results: IOpenCageResponseResult[];
}
