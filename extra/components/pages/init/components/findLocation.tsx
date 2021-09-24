import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Grid, InputBase, Tooltip, useTheme} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {alpha} from "@material-ui/core/styles";

//Components
import {Grid12, GridNumber} from "../../../common/grid";

//I18N
import intl from "react-intl-universal";

//CSS
import { useFindLocationCSS } from "../style/findLocation";

//Hooks
import {useNavigator} from "../../../../hooks/useNavigator";
import {useWindowSize} from "../../../../hooks/useWindowsSize";

//Icons
 import SearchIcon from '@material-ui/icons/Search';

//Services
import {FetchCityName} from "../../../../services/openCage/fetchCityName";
import {FetchWeather} from "../../../../services/openWeather/fetchWeather";
import {ErrorGeneric} from "../../../../utils/errorGeneric";

export function FindLocation(props:{setWeather:Dispatch<SetStateAction<Array<any>>>}){
    const classes = useFindLocationCSS();
    const theme = useTheme();
    const language = useNavigator();
    const size = useWindowSize();
    const [city,setCity] = useState('');
    const [name,setName] = useState('');
    const dispatch = useDispatch();

    //Find Geolocation
    const onChange = ({coords}:GeolocationPosition) => {
        if(coords.latitude !== 0 && coords.longitude !== 1 && language !== ''){
            FetchCityName(coords.latitude,coords.longitude,String(language.split("-", 1)), dispatch,setCity)
        }
        else if(coords.latitude === 0 && coords.longitude === 0){
            setName(intl.get('notFoundLocation'))
        }
    };
    const onError = (error:GeolocationPositionError) => {
        setName(intl.get('locationSupport'))
        dispatch(ErrorGeneric(error.message))
    };

    async function FindLocation(){
        setName(intl.get('loading'))
        const geo = navigator.geolocation;
        if (!geo) {
            setName(intl.get('locationSupport'))
            dispatch(ErrorGeneric(intl.get('locationSupport')))
            return;
        }
        else{
            geo.watchPosition(onChange, onError)
        }
    }

    //Change temp
    useEffect(()=>{
        props.setWeather([])
        if(city !== ''  && language !== ''){
            setName(city)
            FetchWeather(city,dispatch,props.setWeather,String(language.split("-", 1)))
        }
    },[city])

    useEffect(()=>{
        setCity('Cabo Frio, Rio de Janeiro')
    },[])

    return(
        <Grid12 justifyContent={'center'}
                style={{
                    paddingTop:theme.spacing(2),
                    paddingBottom:theme.spacing(2),
                    backgroundColor:alpha('#FFFFFF', 0.95),
                    borderTopRightRadius: size.mobile ? 0 : theme.shape.borderRadius,
                    borderTopLeftRadius: size.mobile ? 0 : theme.shape.borderRadius
        }}>
            <GridNumber number={10}>
                <div className={classes.grow}>
                    <div className={classes.search}>
                        <Grid12 justifyContent={'space-between'}>
                            <Grid>
                                <Tooltip arrow
                                         title={intl.get('findLocation')}>
                                    <div data-icon={`(`}
                                         className={classes.inputIconMete}
                                         onClick={FindLocation}/>
                                </Tooltip>
                            </Grid>
                            <GridNumber number={10}>
                                <InputBase
                                    value={name}
                                    placeholder={intl.get('search')}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    onChange={(event)=>{
                                        setName(event.target.value)
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </GridNumber>
                            <Grid>
                                <Tooltip arrow
                                         title={intl.get('search')}>
                                    <SearchIcon className={classes.inputIcon}
                                                onClick={()=>{setCity(name)}}/>
                                </Tooltip>
                            </Grid>
                        </Grid12>
                    </div>
                </div>
            </GridNumber>
        </Grid12>
    )
}