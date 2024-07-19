import { useQuery } from "react-query";
import getBackground from "../../api/background";

const useBackground = () => {
  return useQuery(["background"], getBackground, {
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export default useBackground;
