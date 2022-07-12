import React, { useEffect, useState } from "react";
import { fetchBackground } from "../../services/fetchService";
import { useStore } from "../../store/store";
import { useWindowSize } from "usehooks-ts";

const Background = () => {
  const [background, setBackground] = useState("");
  const setError = useStore((state) => state.setError);
  const setErrorCode = useStore((state) => state.setErrorCode);
  const { width } = useWindowSize();
  const [fetched, setFetched] = useState(false);

  const imageEffect = () => {
    if (width > 800 && !fetched) {
      setFetched(true);
      fetchBackground()
        .then((data) => {
          setBackground(`https://www.bing.com${data.url}`);
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
    if (background) {
      document.body.style.backgroundImage = `url(${background})`;
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    }
  };

  useEffect(imageEffect, [width]);
  useEffect(backgroundEffect, [background]);

  return (
    <p role={"background"} style={{ display: "none" }}>
      {background}
    </p>
  );
};

export default Background;
