import Rating from 'components/Rating/Rating';
import Heading from 'components/common/Heading/Heading';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

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
    <article>
      <Heading renderAs='h2' text={title} />
      <Rating value={rating} />
      <Link to='/details' state={{ imdbId: imdb_id }}>
        More about {title}
      </Link>
    </article>
  );
};

export default FilmListItem;
