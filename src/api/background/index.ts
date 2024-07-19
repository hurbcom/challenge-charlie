type Image = {
  url: string;
};

const getBackground = (): Promise<Image> => {
  return new Promise<Image>((resolve, reject) => {
    return fetch(`${process.env.REACT_APP_API_BASE_URL as string}/background`)
      .then((res) => {
        return res.json();
      })
      .then((imageUrl) => {
        return resolve(imageUrl);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export default getBackground;
