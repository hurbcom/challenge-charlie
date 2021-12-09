import { useHistory } from "react-router";
import { fetchData } from "../../services/Resource";

const useContainer = () => {

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const OPENCAGE_KEY = process.env.OPENCAGE_KEY;
        const OPENCAGE_URI = 'https://api.opencagedata.com/geocode/v1/json';

        const { results } = await fetchData(`${OPENCAGE_URI}?q=${e.target.search.value}&key=${OPENCAGE_KEY}`);

        history.push({
            search: `?lat=${results[0].geometry.lat}&lng=${results[0].geometry.lng}`
        });

        document.location.reload(true);
    };

    return {
        handleSubmit
    }
};

export default useContainer;