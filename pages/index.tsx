import React, {useEffect, useMemo, useState} from "react";
import { useTheme } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";

//Components
import { Grid10 } from '../extra/components/common/grid'
import { ImageBackgroundInit } from "../extra/components/pages/init/components/imageBackgroud";
import { FindLocation } from "../extra/components/pages/init/components/findLocation";
import { TodayWeather } from "../extra/components/pages/init/components/todayWeather";
import {AfterWeather} from "../extra/components/pages/init/components/afterWeather";
import {SkeletonInit} from "../extra/components/skeleton/init";

//Hooks
import {useNavigator} from "../extra/hooks/useNavigator";
import {useWindowSize} from "../extra/hooks/useWindowsSize";

//Utils
import {ChangeTemp} from "../extra/utils/changeTemp";
import {FindWeather} from "../extra/components/pages/init/utils/findWeather";

//Interfaces
import {ResultTempInterface} from "../extra/interfaces/resultTemp";

export default function Home(){
    const theme = useTheme();
    const size = useWindowSize();
    const language = useNavigator();
    const [unitInit,setUnitInit] = useState('');
    const [weather,setWeather]:any = useState([]);
    const [today,setToday]:any = useState({temp: 0,description: "", unit: "", windDeg: 0, windSpeed: 0,
        humidity: 0, pressure: 0});
    const [tomorrow,setTomorrow] = useState<ResultTempInterface>({temp: 0, unit: ""});
    const [afterTomorrow,setAfterTomorrow] = useState<ResultTempInterface>({temp: 0, unit: ""});

    //Language
    useEffect(()=>{
        if(language !== ''){
            setUnitInit(language === 'pt-BR' ? 'c' : 'f')
        }
    },[language])

    //Weather
    useMemo(() =>{
        FindWeather({weather, unitInit, setToday, setTomorrow, setAfterTomorrow})
    },[weather]);

    return(
        <ImageBackgroundInit>
            <Grid10 justifyContent={'center'}
                    style={{
                        backgroundColor: alpha(theme.palette.background.paper, 0.15),
                        maxWidth: 800,
                        borderRadius: size.mobile? 0 : theme.shape.borderRadius,
                        height: size.mobile ? size.height : 'auto'
                    }}>
                <FindLocation setWeather={setWeather}/>
                {weather.length > 0 && Object.keys(today).length > 0 && tomorrow.temp > 0 && afterTomorrow.temp > 0 ?
                    <>
                        <TodayWeather temp={today.temp}
                                      id={today.id}
                                      unit={today.unit}
                                      description={today.description}
                                      windDeg={today.windDeg}
                                      windSpeed={today.windSpeed}
                                      humidity={today.humidity}
                                      pressure={today.pressure}
                                      click={()=>{ChangeTemp(today,setToday)}}/>
                        <AfterWeather title={'tomorrow'}
                                      end={false}
                                      temp={tomorrow.temp}
                                      typeTemp={tomorrow.unit}
                                      backgroundPotion={0.5}
                                      click={()=>{ChangeTemp(tomorrow,setTomorrow)}}/>
                        <AfterWeather title={'afterTomorrow'}
                                      end={true}
                                      temp={afterTomorrow.temp}
                                      typeTemp={afterTomorrow.unit}
                                      backgroundPotion={0.7}
                                      click={()=>{ChangeTemp(afterTomorrow,setAfterTomorrow)}}/>
                    </>
                    :
                    <SkeletonInit/>
                }

            </Grid10>
        </ImageBackgroundInit>
    )
}