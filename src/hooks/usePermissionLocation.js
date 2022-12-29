import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosition } from "modules/getPosition";

export function usePermissionLocation() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["permissionLocation"],
    queryFn: () => {
      return navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          if (result.state === "prompt") {
            getPosition().then((position) => {
              queryClient.setQueriesData(position);
            });
          }

          result.addEventListener("change", () => {
            queryClient.setQueryData(
              ["permissionLocation"],
              () => result.state
            );
          });

          return result.state;
        });
    },
  });
}
