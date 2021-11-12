import React from "react";
import { useStyles } from "./Input.style";

interface propsInput{
    setText: React.Dispatch<React.SetStateAction<string>>
}

export const Input: React.FC<propsInput> = ({setText}) => {
    const style = useStyles()
    return(
        <input 
            className={style.Input} 
            id="Input" 
            type="text"
            placeholder="Busque seu autor ou livro"
            onChange={(event: React.FormEvent<HTMLInputElement>)=>setText(event.currentTarget.value)}>
        </input>
    );
}