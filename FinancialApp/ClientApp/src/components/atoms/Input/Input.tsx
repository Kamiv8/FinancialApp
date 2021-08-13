import React from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  styleType: 'login' | 'operation';

  placeholder?: string;
  className?: string;
  type?: string;
}

const onChange = (e: React.FormEvent) => {
  e.preventDefault();
};

const Input: React.FC<IInputProps> = ({
  styleType,
  placeholder,
  className,
  type = 'text',
  ...props
}) => {
  const mode: string = styleType === 'login' ? styles.login : styles.tablet;
  return (
    <>
      <input
        autoComplete="off"
        onChange={onChange}
        className={[className, mode].join(' ')}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </>
  );
};

export default Input;
