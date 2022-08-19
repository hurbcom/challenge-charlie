export interface IOpenCageResponseResult {
  components: {
    municipality?: string;
    city?: string;
    state: string;
  };
}

export interface IOpenCageResponse {
  results: IOpenCageResponseResult[];
}
