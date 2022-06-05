const fetchBackgroundImageUrl = async (): Promise<string> => {
  const corsUrl = "https://cors-anywhere.herokuapp.com/";
  const bingUrl =
    "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";
  const headers = new Headers({
    origin: "localhost",
    credentials: "include",
  });
  const imageUrl = await fetch(corsUrl + bingUrl, { headers })
    .then((response) => response.json())
    .then((apiData) => {
      return apiData.images[0].url as string;
    })
    .catch((error) => {
      return error as string;
    });
  return imageUrl;
};

export default fetchBackgroundImageUrl;
