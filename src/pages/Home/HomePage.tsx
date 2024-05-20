import React, { useEffect } from 'react';
import axios from 'axios';
import { ApirUrlHost, FilmsByRatingUrl } from 'consts/apiUrls';

const HomePage = () => {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: FilmsByRatingUrl,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': ApirUrlHost
      }
    };
    const getFilms = async () => {
      const response = await axios
        .request(options)
        .catch((error) => console.log('error', error));
      console.log((response as any)?.data);
    };
    getFilms();
  }, []);
  return <div>Home</div>;
};

export default HomePage;
