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
    <div>
      <>{console.log('films,error,loading', films, error, loading)}</>
      Home
    </div>
  );
};

export default HomePage;
