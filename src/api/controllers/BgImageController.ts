const getDailyImageUrl = async (): Promise<{ url: string }> => {
  return await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US').then(
    async (res) => {
      const { images } = await res.json();
      const { url } = images[0];
      return { url: `https://www.bing.com${url}` };
    }
  );
};

export { getDailyImageUrl };
