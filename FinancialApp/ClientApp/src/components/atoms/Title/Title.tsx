import React from 'react';
import styles from './Title.module.scss';


interface ITitleProps {
  className?: string;
}

const Title: React.FC<ITitleProps> = ({children,className}) => {

    const mode: string = styles.first;

  return <h1 className={[className,mode].join(' ')}>{children}</h1>;
};

export default Title;
