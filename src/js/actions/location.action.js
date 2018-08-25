// importar types
import * as types from './actionTypes'
import axios from 'axios';

export const getImage = () => {
    return (dispatch) => {
        axios.get(`https://pixabay.com/api/?key=5382919-641cc7e96553baa5c465174a8&q=nature&image_type=photo&pretty=true&per_page=3`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: types.GET_FEATURED_IMAGE,
                    payload: res.data.hits[0].largeImageURL
                })
            })
            .catch(error => {
                console.log(error);

            })
    }
}