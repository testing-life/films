import axios from 'axios';
import { FilmDetailsUrl, FilmsByRatingUrl } from 'consts/apiUrls';
import {
  FilmDetailsResponse,
  FilmsFetchHeaders,
  FilmsFetchResponse
} from 'utils/filmFetching';
import { create } from 'zustand';

type Film = {
  imdb_id: string;
  rating: number;
  title: 'string';
};

type State = {
  films: Film[];
  filmDetails: Record<string, any> | undefined;
  loading: boolean;
  error: string;
};

type Action = {
  fetchFilms: () => void;
  fetchFilmDetails: (imdbId: string) => void;
};

const useFilmsStore = create<State & Action>((set) => ({
  films: [],
  loading: false,
  error: '',
  filmDetails: undefined,
  fetchFilms: async () => {
    set({ loading: true, error: '' });
    const response = await axios
      .get<FilmsFetchResponse>(FilmsByRatingUrl, FilmsFetchHeaders)
      .catch((error) => set({ error: error.message }));
    if (response) {
      set({ films: response.data.results, loading: false });
    }
  },
  fetchFilmDetails: async (imdbId: string) => {
    set({ loading: true, error: '' });
    const response = await axios
      .get<FilmDetailsResponse>(`${FilmDetailsUrl}${imdbId}`, FilmsFetchHeaders)
      .catch((error) => set({ error: error.message }));
    if (response) {
      set({ filmDetails: response.data.results, loading: false });
    }
  }
}));

export default useFilmsStore;
