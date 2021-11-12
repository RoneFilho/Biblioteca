import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    Input:{
        width: "12%",
        postion: "absolute",
        top: "10%",
        left: "25%",
        transform: "translate(-10%, -25%)",
        border: "1px solid black",
        borderRadius: "4px"
    },
    "& .Input:focus":{
        border: "#1194e0"
    }
})