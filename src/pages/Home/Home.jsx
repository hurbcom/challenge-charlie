import { useState } from "react";
import { Header } from "@components/Header/Header";
import { Middle } from "@components/Middle/Middle";
import { Footer } from "@components/Footer/Footer";
import BingAPI from "@services/WallpapperBing";
import { Container, ContainerDefault } from "./styled";
import { toast } from "react-toastify";

export const Home = () => {
  const [wallpaper, setWallpaper] = useState("");
  BingAPI.get()
    .then((response) => {
      setWallpaper(response.data.images[0].url);
    })
    .catch((error) => {
      toast.error(
        "Erro ao carregar o wallpaper dinâmico, tente novamente ou mais tarde"
      );
      toast.success("Wallpaper padrão carregado");
    });

  return (
    <>
      {wallpaper ? (
        <Container bgImage={wallpaper}>
          <Header />
          <Middle />
          <Footer />
        </Container>
      ) : (
        <ContainerDefault>
          <Header />
          <Middle />
          <Footer />
        </ContainerDefault>
      )}
    </>
  );
};
