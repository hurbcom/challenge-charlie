import axios from 'axios'; 

async function getImage (setBackground) {
    await axios.get(
        `${process.env.REACT_APP_API_CORS}${process.env.REACT_APP_API_BING}${process.env.REACT_APP_API_BING_IMAGE}`
    ).then(response => setBackground(`${process.env.REACT_APP_API_BING}${response.data.images[0].url}`))
}

export default getImage; 
