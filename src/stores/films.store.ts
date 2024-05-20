import axios from 'axios';
import { FilmsByRatingUrl } from 'consts/apiUrls';
import { FilmsFetchHeaders, FilmsFetchResponse } from 'utils/filmFetching';
import { create } from 'zustand';

type Film = {
  imdb_id: string;
  rating: number;
  title: 'string';
};

type State = {
  films: Film[];
  loading: boolean;
  error: string;
};
type Action = {
  fetchFilms: () => void;
};

const useFilmsStore = create<State & Action>((set) => ({
  films: [],
  loading: false,
  error: '',
  fetchFilms: async () => {
    set({ loading: true, error: '' });
    const response = await axios
      .get<FilmsFetchResponse>(FilmsByRatingUrl, FilmsFetchHeaders)
      .catch((error) => set({ error: error.message }));
    if (response) {
      set({ films: response.data.results, loading: false });
    }
  }
}));

export default useFilmsStore;
