import React from "react";
import { makeStyles,  Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
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

const Message = ({text, props}) =>{
    const classes = useStyles();
    return (<Box className={classes.box}>
            <Typography variant="body1" className={classes.fontIcons}> Z </Typography> 
            <Typography variant="body1" className={classes.text}>{text}</Typography>
        </Box>)
}

Message.propTypes = { 
    text: PropTypes.element.isRequired
 };

export default  Message;