import React from 'react'
import styles from './Textarea.module.scss';


interface Props {
    placeholder?: string;
}

const Textarea: React.FC<Props> = ({placeholder}) => {
    return (
        <textarea className={styles.textarea} placeholder={placeholder}/>
    )
}


export default Textarea;