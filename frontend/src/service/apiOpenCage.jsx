import axios from 'axios'; 

const apiOpenCage = axios.create({
    baseURL: `${process.env.REACT_APP_API_GEO}`
})

export default apiOpenCage; 
