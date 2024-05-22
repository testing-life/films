import Rating from 'components/Rating/Rating';
import Heading from 'components/common/Heading/Heading';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './FilmListItem.css';
import { DETAILS } from 'consts/routes';

export type FilmItem = {
  title: string;
  rating: number;
  imdb_id: string;
};

type Props = {
  film: FilmItem;
};

const FilmListItem: FC<Props> = ({ film: { title, rating, imdb_id } }) => {
  return (
    <article className='film-list-item'>
      <Heading renderAs='h2' text={title} />
      <p className='film-list-item__rating'>
        Rating: <Rating value={rating} />
      </p>

      <Link to={DETAILS} state={{ imdbId: imdb_id }}>
        More about {title}
      </Link>
    </article>
  );
};

export default FilmListItem;
