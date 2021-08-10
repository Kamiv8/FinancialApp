import React from "react";
import styles from "./Input.module.scss";



interface IInputProps {

    type?: 'login' | 'operation';

    value?: string;
    size: "mobile" | "tablet" | "fullscreen";
    placeholder?: string;
}




const Input: React.FC<IInputProps> = ({type,value, placeholder,size}) => {


    const mode: string = type === 'login' ?  `main--${type}` : `main--${type}`;
    return(
        <>
          <input className={[`main--${size}`,mode].join(' ')} value={value} placeholder={placeholder} />
        </>
    )
}

export default (Input);
