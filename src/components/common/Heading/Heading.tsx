import React, { FC } from 'react';
import './Heading.css';

type Props = {
  styleAs?: 'h1' | 'h2' | 'h3';
  renderAs?: 'h1' | 'h2' | 'h3';
  text: string;
};

const Heading: FC<Props> = ({ styleAs, renderAs, text }) => {
  const renderElement = () => {
    switch (renderAs) {
      case 'h1':
        return <h1 className={styleAs ? `${styleAs}` : ''}>{text}</h1>;
      case 'h2':
        return <h2 className={styleAs ? `${styleAs}` : ''}>{text}</h2>;
      case 'h3':
        return <h3 className={styleAs ? `${styleAs}` : ''}>{text}</h3>;
      default:
        return <h1>{text}</h1>;
    }
  };
  return <>{renderElement()}</>;
};

export default Heading;
