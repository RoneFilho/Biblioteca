import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Text.style";

interface propsText{
    title:string
}

export const Text: React.FC<propsText> = ({title}) =>{
    const style = useStyles()

    return(
        <Box className={style.Text}>
            <label>{title}</label>,
        </Box>
    )
}