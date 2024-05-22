import Heading from 'components/common/Heading/Heading';
import { HOME } from 'consts/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const NoMatchPage = () => {
  return (
    <section>
      <Heading text='Are we lost?' />
      <Link to={HOME}>Let's start from the beginning.</Link>
    </section>
  );
};

export default NoMatchPage;
