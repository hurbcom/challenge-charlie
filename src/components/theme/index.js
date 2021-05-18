import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import { fetch_api } from "../../api";
import { __CONSTANTS__ } from "../../config";

/**
 * Definição do CSS para o componente
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

/**
 * Componente para o theme do dia
 * @returns Componente Theme
 */
const Theme = ({ children, props }) => {
  const classes = useStyles();
  const [backGround, setBackGround] = useState();
  useEffect(() => {
    const fetchBackground = async () => {
      const resBackground = await fetch_api(__CONSTANTS__.API.BING);
      setBackGround({ style: { backgroundImage: "url(" + resBackground.image + ")" } });
    }
    fetchBackground();
  }, []);

  return (
    <div className={classes.root} {...backGround}>
      <CssBaseline>{children}</CssBaseline>
    </div>
  );
};

Theme.propTypes = { children: PropTypes.element.isRequired };
export default Theme;
