import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import useFilmsStore from 'stores/films.store';

const DetailsPage = () => {
  const {
    state: { imdbId }
  } = useLocation();
  const { filmDetails, loading, error, fetchFilmDetails } = useFilmsStore();

  useEffect(() => {
    if (imdbId) {
      fetchFilmDetails(imdbId);
    }
  }, [imdbId]);

  return (
    <div>
      DetailsPage
      {!loading && filmDetails && (
        <div>
          {(filmDetails as any).title}
          {(filmDetails as any).year}
          {(filmDetails as any).rating}
          {(filmDetails as any).banner}
          {/* {(filmDetails as any).gen}  */}
          {(filmDetails as any).description}
          {(filmDetails as any).plot}
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
