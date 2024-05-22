import { Genre } from 'components/FilmDetails/FilmDetails';
import Pill from 'components/Pill/Pill';
import React, { FC } from 'react';
import './PillList.css';

type Props = {
  labels: Genre[];
};

const PillList: FC<Props> = ({ labels }) => {
  return labels.length ? (
    <ul className='pill-list'>
      {labels.map((label) => (
        <li className='pill-list__item' key={label.id}>
          <Pill label={label.genre} />
        </li>
      ))}
    </ul>
  ) : null;
};

export default PillList;
