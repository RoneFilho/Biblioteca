import React from "react";
import { Box } from "@material-ui/core";
import { Book } from "@material-ui/icons";
import { InsertLink } from "@material-ui/icons";
import { Person } from "@material-ui/icons";
import { useStyles } from "./List.style";

interface propsList{
    author: string
    title: string
    url: string
}

export const List: React.FC<propsList> = ({author, title, url}) =>{
    const style = useStyles()
    return(
        <Box className={style.List}>
            <dl className={style.ItemList}>
                <dt className={style.Content}><Person  />{author}</dt>
                <dt className={style.Content}><Book />{title}</dt>
                <dt className={style.Content}><InsertLink />{url}</dt>
            </dl>
        </Box>
    );
}