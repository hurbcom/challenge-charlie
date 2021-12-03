import axios from 'axios';

interface Props {
  latitude: number;
  longitude: number;
  setAddress: Function;
}

const reverseGeocode = ({ latitude, longitude, setAddress }: Props) => {
  const urls = `${process.env.OPEN_CAGE_URL}?q=${latitude},${longitude}&key=${process.env.OPEN_CAGE_API_KEY}&language=en`;
  axios.get(urls).then((res) => {
    const {
      results: [
        {
          components: { state, city },
        },
      ],
    } = res.data;
    setAddress(`${city}, ${state}`);
  });
};
export default reverseGeocode;
