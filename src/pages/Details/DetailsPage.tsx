import FilmDetails, {
  FilmItemDetails
} from 'components/FilmDetails/FilmDetails';
import Spinner from 'components/Spinner/Spinner';
import Heading from 'components/common/Heading/Heading';
import { HOME } from 'consts/routes';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFilmsStore from 'stores/films.store';

const DetailsPage = () => {
  const {
    state: { imdbId }
  } = useLocation();
  const { filmDetails, loading, error, fetchFilmDetails } = useFilmsStore();

  useEffect(() => {
    if (imdbId && filmDetails?.imdb_id !== imdbId) {
      fetchFilmDetails(imdbId);
    }
  }, [imdbId]);

  return (
    <section>
      <header>
        <Link to={HOME}>Home</Link>
        <Heading text='Film Details' />
      </header>
      {!loading && filmDetails && (
        <FilmDetails
          details={
            filmDetails as Pick<typeof filmDetails, keyof FilmItemDetails>
          }
        />
      )}
      {loading && !error && <Spinner label='Loading film details' />}
      {error && <p>{error}</p>}
    </section>
  );
};

export default DetailsPage;
