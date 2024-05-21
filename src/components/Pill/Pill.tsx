import React, { FC } from 'react';

type Props = {
  label: string;
};

const Pill: FC<Props> = ({ label }) => {
  return <span>{label}</span>;
};

export default Pill;
