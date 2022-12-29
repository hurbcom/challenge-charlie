import { useQuery } from "@tanstack/react-query";
import { getPosition } from "modules/getPosition";

export function usePosition(options) {
  return useQuery({
    queryKey: ["position"],
    queryFn: getPosition,
    ...options,
  });
}
