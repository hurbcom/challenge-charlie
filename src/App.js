import { useQuery } from "@tanstack/react-query";
import { NoGeolocation } from "components/NoGeolocation";
import { getBingImage } from "modules/getBingImage";
import { getPosition } from "modules/getPosition";
import { useEffect } from "react";
import { withHocs, withIf } from "react-new-hoc";

function useBingImage() {
  return useQuery({
    queryKey: ["bingImage"],
    queryFn: getBingImage,
  });
}

function usePosition({ isPermitted }) {
  return useQuery({
    queryKey: ["position"],
    queryFn: getPosition,
    enabled: isPermitted,
  });
}

function App() {
  const bingImage = useBingImage();

  useEffect(() => {
    if (bingImage.isFetched) {
      document.body.style.backgroundImage = `url("${bingImage.data}")`;
    }
  }, [bingImage]);

  // const permission = usePermissionLocation();
  // const position = usePosition({ isPermitted: false });

  return <div>Leo</div>;
}

export default withHocs(
  withIf(() => navigator.geolocation, {
    dependencyNames: [],
    Else: NoGeolocation,
  })
)(App);
