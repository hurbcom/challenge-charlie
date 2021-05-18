import React from "react";
import { makeStyles,  Box, Typography } from "@material-ui/core";
import { Util } from "../../config";
/**
 * Definição do CSS para o componente
 */
 const useStyles = makeStyles((theme) => ({
     box:{
        padding:theme.spacing(5),
        background:Util.convertHexToRGBA('#999999' , ".9"),
        color:"#fff",
        textAlign:"center"
     },
    fontIcons: {
      fontFamily: 'MeteoconsRegular',
      fontSize: 180,
      height: 180,
      lineHeight: '180px',
      [theme.breakpoints.down("sm")]: {
        fontSize: 100,
        height: 100,
        lineHeight: '100px',
      },
    },
    text: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: 22,
      padding:theme.spacing(2)
    }
  }));

/**
 *  Componente de mensageria
 * @param {*} text = Texto que será exibido 
 * @returns Componente Message
 */
const Message = ({text, props}) =>{
    const classes = useStyles();
    return (<Box className={classes.box}>
            <Typography variant="body1" className={classes.fontIcons} data="icon"> Z </Typography> 
            <Typography variant="body1" className={classes.text} data="message">{text}</Typography>
        </Box>)
}

export default  Message;