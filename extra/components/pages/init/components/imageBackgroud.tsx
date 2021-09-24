import {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";

//Interface
import { ImageBackgroundInitInterface } from "../../../../interfaces/imageBackground";

//Redux
import {useDispatch} from "react-redux";

//Services
import {FetchBackgroundImage} from "../../../../services/bing/fetchBackgroundImage";

//Hooks
import {useNavigator} from "../../../../hooks/useNavigator";

export function ImageBackgroundInit(props:ImageBackgroundInitInterface){
    const dispatch = useDispatch();
    const language = useNavigator();
    const [img,setImg] = useState('');

    useEffect(()=>{
        if(language !== ''){
            FetchBackgroundImage(language,dispatch,setImg)
        }
    },[language])

    return(
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
                {props.children}
        </Grid>
    )
}