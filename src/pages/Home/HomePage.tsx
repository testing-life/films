import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFilmsStore from 'stores/films.store';

const HomePage = () => {
  const { films, loading, error, fetchFilms } = useFilmsStore();

  useEffect(() => {
    if (!films.length) {
      fetchFilms();
    }
  }, []);

  return (
    <div>
      <>{console.log('films,error,loading', films, error, loading)}</>
      Home
      {!loading &&
        !error &&
        films.length &&
        films.slice(0, 10).map((film) => (
          <div>
            {film.title}
            {film.rating}
            <Link to='/details' state={{ imdbId: film.imdb_id }}>
              lesgo
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
