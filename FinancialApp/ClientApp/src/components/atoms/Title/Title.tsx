import React from 'react';
import styles from './Title.module.scss';


interface ITitleProps {
  className?: string;
  whiteStyle?: boolean;
  secondTitle?: boolean;
  currentMoney?: boolean;
}

const Title: React.FC<ITitleProps> = ({children,className,whiteStyle,secondTitle,currentMoney}) => {

    const mode: string = whiteStyle ? styles.whiteStyle : styles.first;
    const mode2: string | undefined = secondTitle ? styles.secondTitle : undefined;
    const mode3: string | undefined = currentMoney ? styles.currentMoney : undefined;
  return <h1 className={[className,mode,mode2,mode3].join(' ')}>{children}</h1>;
};

export default Title;
