import { useQuery } from "react-query";
import getPlaceName, { PlaceName } from "../../api/geocode";

export type PlaceQuery = {
  latitude?: number;
  longitude?: number;
};

const useCurrentPlaceName = (query: PlaceQuery | undefined) => {
  return useQuery<PlaceName>({
    queryKey: ["currentPlaceName", query?.latitude, query?.longitude],
    queryFn: getPlaceName,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: !!query?.latitude && !!query?.longitude,
  });
};

export default useCurrentPlaceName;
