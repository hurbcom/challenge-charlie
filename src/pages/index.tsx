import { GetStaticProps } from "next";
import axios from "axios";

import styles from "./home.module.scss";

type HomeProps = {
  bingImageUrl: string;
};

const Home = ({ bingImageUrl }: HomeProps) => {
  return (
    <div className={styles.container}>
      <img src={bingImageUrl} />
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
