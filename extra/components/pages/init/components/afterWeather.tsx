import { useTheme } from "@material-ui/core";

//Components
import { Grid12 , Grid6 } from "../../../common/grid";
import { TypographyCustom } from "../../../common/typography";

//I18N
import intl from "react-intl-universal";

//Interface
import {AfterWeatherInterface} from "../../../../interfaces/afterWeather";

//Utils
import {getTempColor} from "../../../../utils/getTempColor";
import {alpha} from "@material-ui/core/styles";
import {getTempUnit} from "../../../../utils/getTempUnit";

//Hooks
import {useWindowSize} from "../../../../hooks/useWindowsSize";

export function AfterWeather(props:AfterWeatherInterface){
    const theme = useTheme();
    const size = useWindowSize();

    return(
        <Grid12 style={{
            paddingTop:theme.spacing(2),
            paddingBottom:theme.spacing(2),
            backgroundColor:alpha(getTempColor({temp:props.temp,unit:props.typeTemp}), props.backgroundPotion),
            height: 100,
            borderBottomRightRadius: props.end ?  size.mobile ? 0 : theme.shape.borderRadius : 0,
            borderBottomLeftRadius: props.end ?  size.mobile ? 0 : theme.shape.borderRadius : 0
        }}>
            <Grid6/>
            <Grid6>
                <Grid12>
                    <TypographyCustom variant={'h2'}>
                        {intl.get(props.title)}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h1'}
                                      style={{cursor:'pointer'}}
                                      onClick={props.click}>
                        {Number(props.temp).toFixed(0)}{getTempUnit(props.typeTemp)}
                    </TypographyCustom>
                </Grid12>
            </Grid6>
        </Grid12>
    )
}