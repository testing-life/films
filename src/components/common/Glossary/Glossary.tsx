import React, { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  children: ReactNode[];
}

const Glossary: FC<IProps> = ({ children }) => {
  return <dl>{children}</dl>;
};

export default Glossary;
