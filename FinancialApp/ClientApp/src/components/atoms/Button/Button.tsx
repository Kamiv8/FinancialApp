import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  version: 'first' | 'firstReverse';
  onSubmit?: () => void; 
  type?: string;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ version, children, onSubmit,className,...props }) => {
  const mode: string = version === 'first' ? styles.first : styles.firstReverse;

  return <button className={[className, mode].join(' ')} onSubmit={onSubmit}>{children}</button>;
};

export default Button;
