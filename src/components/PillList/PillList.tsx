import { Genre } from 'components/FilmDetails/FilmDetails';
import Pill from 'components/Pill/Pill';
import React, { FC } from 'react';

type Props = {
  labels: Genre[];
};

const PillList: FC<Props> = ({ labels }) => {
  return labels.length ? (
    <ul>
      {labels.map((label) => (
        <li key={label.id}>
          <Pill label={label.genre} />
        </li>
      ))}
    </ul>
  ) : null;
};

export default PillList;
