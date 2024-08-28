import axios from "axios";

const urlApi='https://api.nasa.gov/planetary/apod?api_key=vJQx8AwrUVrmb3NlFT8kw42zsiYiXQBQQ15r2DHb&count=15';

export const fetchDataNASA = async () => {
const response = await axios.get(urlApi);
return response.data;
};