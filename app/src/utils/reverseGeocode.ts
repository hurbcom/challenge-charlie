import axios from 'axios';

interface Props {
  latitude: number;
  longitude: number;
  setLocation: Function;
}

const reverseGeocode = ({ latitude, longitude, setLocation }: Props) => {
  const urls = `${process.env.OPEN_CAGE_URL}?q=${latitude},${longitude}&key=${process.env.OPEN_CAGE_API_KEY}&language=en`;
  axios.get(urls).then((res) => {
    const {
      results: [
        {
          components: { state, city },
        },
      ],
    } = res.data;
    setLocation(city && state ? `${city}, ${state}` : state);
  });
};
export default reverseGeocode;
