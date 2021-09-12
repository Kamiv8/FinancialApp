import React, { useState } from 'react';
import styles from './OperationForm.module.scss';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Textarea from '../../atoms/Textarea/Textarea';

interface IOperationFormProps {
  className?: string;
}

const OperationForm: React.FC<IOperationFormProps> = ({ className }) => {
  const [focusType, setFocusType] = useState<string>('user');

  const modeUser = focusType === 'user' ? styles.focusType : '';
  const modeGroup = focusType === 'group' ? styles.focusType : '';

  return (
    <>
      <div className={styles.spanWrapper}>
        <span
          className={[styles.modeSpan, modeUser].join(' ')}
          onClick={() => setFocusType('user')}
        >
          User
        </span>
        <span
          className={[styles.modeSpan, modeGroup].join(' ')}
          onClick={() => setFocusType('group')}
        >
          Group
        </span>
      </div>
      <form className={[styles.wrapperForm, className].join(' ')}>
        <Input styleType="operation" placeholder="Title" />
        <Input styleType="operation" placeholder="Price" />
        <Input styleType="operation" placeholder="Date" />
        <Textarea placeholder="Description" />
        <Button version="firstReverse">Add</Button>
      </form>
    </>
  );
};

export default OperationForm;
