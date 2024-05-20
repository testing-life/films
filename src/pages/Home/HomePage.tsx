import FilmListItem, { FilmItem } from 'components/FilmListItem/FilmListItem';
import React, { useEffect } from 'react';
import useFilmsStore from 'stores/films.store';

const HomePage = () => {
  const { films, loading, error, fetchFilms } = useFilmsStore();

  useEffect(() => {
    if (!films.length) {
      fetchFilms();
    }
  }, []);

  return (
    <section>
      <h1>Top 10 films.</h1>
      {!loading && !error && films.length ? (
        <ol>
          {films.slice(0, 10).map((film: FilmItem) => (
            <li key={film.imdb_id}>
              <FilmListItem film={film} />
            </li>
          ))}
        </ol>
      ) : null}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </section>
  );
};

export default HomePage;
