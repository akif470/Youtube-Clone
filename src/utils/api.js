import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key':
      process.env.REACT_APP_YOUTUBE_API_KEY ||
      'abdaeb9602msh204af1e96e3ee60p1fab53jsnf55f1d6b31c1',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
