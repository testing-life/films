import { ApirUrlHost } from 'consts/apiUrls';

export type FilmsFetchResponse = {
  links: {};
  count: number;
  results: [];
};
export const FilmsFetchHeaders = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': ApirUrlHost
  }
};
