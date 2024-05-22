import PillList from 'components/PillList/PillList';
import Glossary from 'components/common/Glossary/Glossary';
import GlossaryEntry from 'components/common/GlossaryEntry/GlossaryEntry';
import Heading from 'components/common/Heading/Heading';
import React, { FC } from 'react';
import './FilmDetails.css';

export type Genre = { id: number; genre: string };

export type FilmItemDetails = {
  title: string;
  rating: number;
  year: string;
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
  const { title, rating, year, image_url, description, trailer, plot, gen } =
    details;
  return (
    <article className='film-details'>
      <Heading text={title} />
      <div className='film-details__meta'>
        <div className='film-details__col'>
          <img className='film-details__meta-image' src={image_url} alt='' />
        </div>
        <div className='film-details__col'>
          <div className='mb-24'>
            <PillList labels={gen} />
          </div>
          <div className='mb-24'>
            <Glossary>
              <GlossaryEntry term='Released' definition={year} />
              <GlossaryEntry term='Rating' definition={rating} />
              <GlossaryEntry term='Plot' definition={plot} />
            </Glossary>
          </div>
          <a target='_blank' href={trailer} rel='noreferrer'>
            Watch {title} trailer on YouTube
          </a>
        </div>
      </div>

      <details>
        <summary>{title} description</summary>
        <p>{description}</p>
      </details>
    </article>
  );
};

export default FilmDetails;
