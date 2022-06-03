import React, { useEffect } from "react";

import fetchBackgroundImageUrl from "services/imageService";
import { useStore } from "store/store";
import "components/Background/Background.scss";

const Background = ({ children }) => {
  const { backgroundImageUrl, setBackgroundImageUrl } = useStore();

  useEffect(() => {
    fetchBackgroundImageUrl().then((url) => setBackgroundImageUrl(url));
  }, []);

  return (
    <main
      style={{
        backgroundImage: `url(https://www.bing.com${backgroundImageUrl})`,
      }}
      className="background"
    >
      {children}
    </main>
  );
};

export default Background;
