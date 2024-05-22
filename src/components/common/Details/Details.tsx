import React, { FC } from 'react';
import './Details.css';

type Props = {
  title: string;
  content: string;
};
const Details: FC<Props> = ({ title, content }) => {
  return (
    <details className='details'>
      <summary className='details__summary'>{title}</summary>
      <p className='details__content'>{content}</p>
    </details>
  );
};

export default Details;
