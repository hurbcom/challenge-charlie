import axios from 'axios';

interface Props {
  location: string;
  setPosition: Function;
}

const forwardGeocode = ({ location, setPosition }: Props) => {
  const urls = `${process.env.OPEN_CAGE_URL}?q=${location}&key=${process.env.OPEN_CAGE_API_KEY}&language=en`;
  axios.get(urls).then((res) => {
    const {
      results: [
        {
          geometry: { lat: latitude, lng: longitude },
        },
      ],
    } = res.data;
    setPosition({
      latitude,
      longitude,
    });
  });
};
export default forwardGeocode;
