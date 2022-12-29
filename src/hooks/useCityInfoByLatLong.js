import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOpenCageByLatLng } from "modules/openCage";

export function useCityInfoByLatLong({ latitude, longitude }, options) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["cityInfo", latitude, longitude],
    queryFn: () => getOpenCageByLatLng(latitude, longitude),
    enabled: queryClient.getQueryState(["position"]).status === "success",
    ...options,
  });
}
