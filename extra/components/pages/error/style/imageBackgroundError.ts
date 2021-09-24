import {createStyles, makeStyles} from "@material-ui/core/styles";

//Hooks
import {useWindowsSizeInterface} from "../../../../interfaces/useWindowsSize";

export const useImageBackgroundErrorCSS = makeStyles(() =>
    createStyles({
        root: {
            height: (size:useWindowsSizeInterface) => size.height,
        },
        absolute: {
            height:  (size:useWindowsSizeInterface) => size.height /8 ,
            width:  (size:useWindowsSizeInterface) => size.width / 12,
            position: 'absolute',
            marginLeft:  (size:useWindowsSizeInterface) => size.width / 50,
        },
        children: {
            height: '100%',
            width: '100%',
            position: 'absolute',
        }
    }),
);