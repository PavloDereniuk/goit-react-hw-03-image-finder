import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '39858400-2317542a926fa097b28c76f60';

export const fetchImages = async additionalParams => {
  const response = await axios.get(`?key=${API_KEY}&`, {
    params: additionalParams,
  });
  return response.data;
};
