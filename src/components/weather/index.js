import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Box, Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import Collapse from '@material-ui/core/Collapse';
import Message from '../message';
import Forecast from './forecast';
import Describe from './describe.json';
import { fetch_api } from "../../api";
import { Util, __CONSTANTS__ } from "../../config";

/**
 * Definição do CSS para o componente
 */
const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.up("md")]: {
      minWidth: 600,
      maxWidth: 600,
      boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.3)',
      borderRadius: 10,
      overflow: 'hidden',
    },
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      paddingTop: 0,
      width: "100%",
    },
  },
  searchBox: {
    background: Util.convertHexToRGBA("#fafafa", ".95"),
    padding: theme.spacing(2),
    boxShadow: "-1px 7px 5px -3px rgba(0,0,0,0.75)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fontIconCity: {
    fontFamily: 'MeteoconsRegular',
    fontSize: 48,
    width: 48,
    height: 48,
    lineHeight: '48px',
    color: '#999999',
  },
  searchField: {
    '& .MuiInput-formControl': {
      '&:before, &:after': {
        display: 'none',
      }
    },
    "& input": {
      border: 0,
      fontSize: 32,
      color: '#999999',
      padding: theme.spacing(0, 2),
      [theme.breakpoints.down("sm")]: {
        fontSize: 25,
      },
    },
  }
}));

/**
 * Componente para exibição das previsões meteorológicas
 * @returns Componente Weather
 */
const Weather = () => {
  const classes = useStyles();
  // Criando o state default
  const [config, setConfig] = useState({typing: false, typingTimeout: 0, collapse:true});
  const [form, setForm] = useState({ localName: "Aguardando...", 
                                     loading:true,
                                     placeNotFound: false, 
                                     unit:null, 
                                     weather: {  description: "", pressure:"", temp: "", wind_speed: "", humidity:"", 
                                                days : {  today: 0,  tomorrow: 0,  after_tomorrow: 0  } 
                                              }, 
                                    });

  const setState = async (params) =>{
    setForm({ ...form,  loading:true,  placeNotFound:false });
    setConfig({...config, collapse:false })
    let data = await fetch_api(__CONSTANTS__.API.SEARCH, params);
    if(data.days) setForm({ ...form, loading:false, placeNotFound:false, localName: params.localName || data.city, weather: { days: data.days } });
    if(data.message) setForm({ ...form, placeNotFound:true });
    setConfig({...config, collapse:true });
  }
  
  useEffect(() => {
    if(navigator.geolocation) 
        navigator.geolocation.getCurrentPosition(position => setState(position.coords), ()=> {
            setConfig({...config,  collapse:false}); 
            setForm({...form, loading:false, localName:''})
        });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, localName: e.target.value });
    if(config.typingTimeout) clearTimeout(config.typingTimeout);
    setConfig({ typingTimeout: setTimeout(() => setState({localName: e.target.value }), 2000) });
  }

  return (
    <Box className={classes.page}>
      <Box className={classes.searchBox}>
        { form.loading ? (<Typography variant="body1"><CircularProgress /></Typography>) : ( <Typography variant="body1" className={classes.fontIconCity}> ( </Typography> ) }
        <TextField className={classes.searchField} placeholder={Describe.weather.messages.placeHolder} value={form.localName} onChange={handleChange} fullWidth />
      </Box>
      <Collapse in={config.collapse}>
          {(!form.loading && !form.placeNotFound) && Object.keys(Describe.weather.days).map(day=> (<Forecast unit={form.unit} day={day} data={form.weather.days[day]} {...Describe.weather.days[day]} />)) }
          {(form.placeNotFound && (<Message text={Describe.weather.messages.placeNotFound}/>))}
      </Collapse>
    </Box>
  );
}
export default  Weather;