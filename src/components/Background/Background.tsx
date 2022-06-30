import React, { useEffect } from "react";
import { fetchBackground } from "../../services/fetchService";
import { useStore } from "../../store/store";
import Locator from "../Locator/Locator";

const Background = () => {
  const background = useStore((state) => state.background);
  const setBackground = useStore((state) => state.setBackground);

  const imageEffect = () => {
    fetchBackground().then((data) => {
      setBackground({
        url: `https://www.bing.com/${data.url}`,
        altText: data.title,
      });
    });
  };

  const backgroundEffect = () => {
    if (background.url != "") {
      document.body.style.backgroundImage = `url(${background.url})`;
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    }
  };

  useEffect(imageEffect, []);
  useEffect(backgroundEffect, [background.url]);

  return <Locator />;
};

export default Background;
