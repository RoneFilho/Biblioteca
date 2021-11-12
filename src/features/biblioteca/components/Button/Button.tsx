import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./Button.style";

interface propsButton{
    onclick: () => void
}

export const Button: React.FC<propsButton> = ({onclick}) => {
    const style = useStyles();
    return(
        <button 
        className={style.Button}
        onClick={onclick}>
            <SearchIcon 
            className={style.Lupa} />
        </button> 
    );
}