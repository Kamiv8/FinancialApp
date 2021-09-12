import  React from 'react';
import { Redirect } from 'react-router';
import styles from './Paragraph.module.scss';



interface IParagraphProps {
    type?: 'redirect' | 'normal';
    className?: string;
}

const Paragraph: React.FC<IParagraphProps> = ({children,type,className,...props}) => {

    const mode: string = type === 'redirect' ? styles.redirect : styles.normal;
  return <p className={[mode,className].join(' ')}>{children}</p>;
};

export default Paragraph;
