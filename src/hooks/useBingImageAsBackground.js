import { useQuery } from "@tanstack/react-query";
import { getBingImage } from "modules/getBingImage";
import { useEffect } from "react";

function useBingImage() {
  return useQuery({
    queryKey: ["bingImage"],
    queryFn: getBingImage,
  });
}

export function useBingImageAsBackground() {
  const bingImage = useBingImage();

  useEffect(() => {
    if (bingImage.isFetched) {
      document.body.style.backgroundImage = `url("${bingImage.data}")`;
    }
  }, [bingImage]);
}
