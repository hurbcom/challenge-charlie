import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import AsyncSelect from "react-select/async";

import styles from "./home.module.scss";
import fetchLocationOpenCage from "../services/openCage";

type HomeProps = {
  bingImageUrl: string;
};

const Home = ({ bingImageUrl }: HomeProps) => {
  const [place, setPlace] = useState({});

  const loadOptions = async (
    inputValue: string,
    callback: (places: unknown[]) => void
  ) => {
    if (inputValue.length < 5) return;

    const places = await fetchLocationOpenCage(inputValue);

    callback(places);
  };

  return (
    <div className={styles.container}>
      <img src={bingImageUrl} />

      <div className={styles.inputContainer}>
        <AsyncSelect
          placeholder="Digite uma cidade para busca"
          classNamePrefix="filter"
          cacheOptions
          loadOptions={loadOptions}
          onChange={setPlace}
          value={place}
        />
      </div>
      {JSON.stringify(place)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US"
  );
  const imageUrl = data.images[0].url;
  const formattedBingImageUrl = `https://bing.com${imageUrl}`;

  return {
    props: {
      bingImageUrl: formattedBingImageUrl,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
