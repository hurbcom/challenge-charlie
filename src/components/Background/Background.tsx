import React, { useEffect, useState } from "react";
import { fetchBackground } from "../../services/fetchService";
import { useStore } from "../../store/store";
import { useWindowSize } from "usehooks-ts";

const Background = () => {
  const background = useStore((state) => state.background);
  const setBackground = useStore((state) => state.setBackground);
  const setError = useStore((state) => state.setError);
  const setErrorCode = useStore((state) => state.setErrorCode);
  const { width } = useWindowSize();
  const [fetched, setFetched] = useState(false);

  const imageEffect = () => {
    if (width > 800 && !fetched) {
      setFetched(true);
      fetchBackground()
        .then((data) => {
          setBackground({
            url: `https://www.bing.com/${data.url}`,
            altText: data.title,
          });
        })
        .catch(() => {
          setError();
          setErrorCode({
            erro: "Não foi possível se comunicar com o Bing",
            mensagem: "",
          });
        });
    }
  };

  const backgroundEffect = () => {
    if (background.url) {
      document.body.style.backgroundImage = `url(${background.url})`;
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    }
  };

  useEffect(imageEffect, [width]);
  useEffect(backgroundEffect, [background.url]);

  return <></>;
};

export default Background;
