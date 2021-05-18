import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import { Util } from "../../../config";

/**
 * Definição do CSS para o componente
 */
const useStyles = makeStyles((theme) => ({
    flex: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      background: props => props.background ? Util.convertHexToRGBA( props.background , props.alpha || ".7") : 'rgba(0,0,0,.4)',
      justifyContent: "space-between",
    },
    info: {
      width: '40%',
      padding: theme.spacing(2, 0),
      [theme.breakpoints.down("sm")]: {
        width: '50%',
      }
    },
    boxIcon: {
      width: '60%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down("sm")]: {
        width: '50%',
      }
    },
    fontIcons: {
      fontFamily: 'MeteoconsRegular',
      fontSize: 160,
      width: 160,
      height: 160,
      lineHeight: '160px',
      [theme.breakpoints.down("sm")]: {
        fontSize: 130,
        width: 130,
        height: 130,
        lineHeight: '130px',
      },
    },
    link:{
        textDecoration:'none',
        color:'white'
    },
    text: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: 22,
    },
    today: {
      textTransform: 'uppercase',
      padding: theme.spacing(1, 0, 0 ,0),
    },
    temperature: {
      textTransform: 'uppercase',
      padding: theme.spacing(0),
    },
    description: {
      padding: theme.spacing(2, 0, 1, 0),
      textTransform: 'capitalize'
    },
    default: {
        fontSize: 16,
    },
  
  }));

/**
 * Componente para exibição dos dias (Hoje/Amanhã/Depois de amanhã)
 * @param {*} unit  = Unidade de medida para conversão
 * @param {*} data  = Dados para exibição dos dias
 * @param {*} config = Configuração para apresentação de icon e nome ( ver definição em  ./describe.json ) 
 * @param {*} labels = Configuração para exibir quais labels ( ver definição em  ./describe.json ) 
 * @param {*} day = today, tomorrow e after_tomorrow 
 * @returns Componente Forecast
 */
const Forecast = ({unit, data, config, labels, day, props}) =>{
    let cfgBackground = Util.getColorToTemperature(data.temp, day); // backgroud.
    const classes = useStyles({ ...cfgBackground}); // altera o backgroud de acordo com o retorno.
    const [temperature, setTemperature] = useState(Util.convertUnit(unit, data.temp));
    const handleClick = ()=> setTemperature(Util.convertUnit(temperature.unit === "celsius" && "fahrenheit",  data.temp)); // faz a conversão.
    return (<>
                <Box className={ classes.flex}>
                    <Box className={classes.boxIcon}>
                        { config.showIcon && ( <Typography variant="body1" className={classes.fontIcons} data="icon"> {cfgBackground.keyIcon} </Typography> ) } 
                    </Box> 
                    <Box className={classes.info}>
                        <Typography variant="body1" className={clsx(classes.text, classes.today)} data={config.name}> {config.name} </Typography>
                        <Typography variant="body1" className={clsx(classes.text, classes.temperature)} data="temperature">
                            <Link className={classes.link} onClick={()=>handleClick()}> {temperature.value} </Link>
                        </Typography>
                        { 
                        // Faço loop em (days[day].labels) pela definição do arquivo (./describe.json)
                        // Assim o componente fica dinâmico pega os labels e busca dentro do (data) se houver vai exibir
                        // Caso seja uma frase Vento:{wind_speed} KM/h a saía vai ser Vento:100 KM/h
                        labels && (Object.keys(labels)
                                            .map(label=> (  data[label] && ( 
                                                <Typography key={label} data={label} variant="body1" className={clsx(classes.text, classes[label] || classes.default)}>
                                                    {  Util.formart(labels[label],{[label]: data[label]}) }
                                                </Typography>)
                                    )))}

                    </Box> 
                </Box>
        </>);
}


export default Forecast;