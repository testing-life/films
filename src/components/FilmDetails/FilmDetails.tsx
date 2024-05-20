import React, { FC } from 'react';

type Genre = { id: number; genre: string };

export type FilmItemDetails = {
  title: string;
  rating: number;
  year: string;
  banner: string;
  image_url: string;
  description: string;
  plot: string;
  gen: Genre[];
};

export type Props = {
  details: FilmItemDetails;
};

const FilmDetails: FC<Props> = ({ details }) => {
  const { title, rating, year, image_url, banner, description, plot, gen } =
    details;
  return (
    <article>
      <h2>{title}</h2>
      <p>Released: {year}</p>
      <p>Rating: {rating}</p>
      {gen.length ? (
        <ul>
          {gen.map((genre: Genre) => (
            <li key={genre.id}>{genre.genre}</li>
          ))}
        </ul>
      ) : null}
      <img src={image_url} alt='' />
      <p>{description}</p>
      <p>{plot}</p>
    </article>
  );
};

export default FilmDetails;
