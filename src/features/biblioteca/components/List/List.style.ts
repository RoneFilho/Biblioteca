import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    List:{
        display: "flex",
        justifyContent: "center"
    },
    ItemList:{
        width: "30%",
        height: "100px",
        textAlign: "left",
        backgroundColor: "#84A7C4",
        margin: "1vh 0vh 1vh 1vh",
        borderRadius: "1vh",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    Content:{
        display: "flex",
        justifyContent: "left",
        marginTop: "6px"
    }
})