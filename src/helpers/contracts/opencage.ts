export namespace IOpenCageApi {
  export type CityByCoordinatesResult = {
    results: Array<{
      components: {
        city: string;
        state: string;
      };
    }>;
  };
}
