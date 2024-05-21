import PillList from 'components/PillList/PillList';
import React, { FC } from 'react';

export type Genre = { id: number; genre: string };

export type FilmItemDetails = {
  title: string;
  rating: number;
  year: string;
  banner: string;
  image_url: string;
  description: string;
  plot: string;
  gen: Genre[];
  trailer: string;
};

export type Props = {
  details: FilmItemDetails;
};

const FilmDetails: FC<Props> = ({ details }) => {
  const {
    title,
    rating,
    banner,
    year,
    image_url,
    description,
    trailer,
    plot,
    gen
  } = details;
  return (
    <article>
      <>{console.log('details', details)}</>
      <h2>{title}</h2>
      <img src={image_url} alt='' />
      <a target='_blank' href={trailer} rel='noreferrer'>
        <img
          src={banner}
          alt={`Watch ${title} trailer on YouTube, opens a new tab`}
        />
      </a>
      <PillList labels={gen} />
      <dl>
        <dt>Released</dt>
        <dd>{year}</dd>
        <dt>Rating</dt>
        <dd>{rating}</dd>
        <dt>Plot</dt>
        <dd>{plot}</dd>
      </dl>
      <details>
        <summary>{title} description</summary>
        <p>{description}</p>
      </details>
    </article>
  );
};

export default FilmDetails;
