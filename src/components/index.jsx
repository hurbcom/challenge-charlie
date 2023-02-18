import React, {useState, useEffect} from 'react';
import { getToday, getNextDays, getByLocation, getLocation } from '../service/weather'
import { getBackground } from '../service/background'
import { useDispatch, useSelector } from 'react-redux';
import {Today} from "./Today"
import {Tomorrow} from "./Tomorrow"
import {AfterTomorrow} from "./AfterTomorrow"
import {Input} from "./Input"


export function Components() {
    const dispatch = useDispatch();
    const day = useSelector(state => state.day);
    const days = useSelector(state => state.days);

    const [text, setText] = useState('');
    const [background, setBackground] = useState('');

    const getDay = async (city) => {
        const todayResult = await getToday(city);
        const NextDaysResult = await getNextDays(city);
        
        dispatch({type:'SET_TODAY', payload: todayResult });
        dispatch({type:'SET_NEXT_DAYS', payload: NextDaysResult });
    }

    useEffect(() => {
        locationHandler();
        getBackgroundImage();
      }, []);

    const locationHandler = async () => {
        const {latitude, longitude} = await getLocation();
        const result = await getByLocation(latitude, longitude);

        if(result) {
            getDay(result);
        }
    }
    const getBackgroundImage = async () => {
        const x = await getBackground();
        setBackground(x)
    }

      const handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            getDay(text);
          }
      }



  return (
    <div style={{displa:"flex", justifyContent:"center", alignItems:"center", width:'100%', maxHeight:"100vh"}}>
        <img src={background} style={{position:"absolute", height:"100vh", width:"100%"}}  />
        <div style={{position:"relative", display:"flex", flexDirection:"column", alignItems:'center'}}>
            <div style={{width:"50%"}}>
                <Input handleKeyDown={handleKeyDown} setText={setText} />
            </div>
                {
                    day && <div style={{width:"50%"}}>
                    <Today day={day} />
                    <Tomorrow days={days} />
                    <AfterTomorrow days={days} />
                    </div>
                }

        </div>
    </div>
  );
}
