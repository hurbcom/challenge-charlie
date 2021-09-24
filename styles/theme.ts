import { unstable_createMuiStrictModeTheme as createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {useMedia} from "../extra/hooks/useMedia";

export default function Theme() {
    let isDark = useMedia("(prefers-color-scheme: dark)");
    const palletType = isDark ? "dark" : "light";

    const theme = createMuiTheme({
        palette: {
            primary: {
                light : '#7EA96B',
                main : '#7EA96B',
                dark : '#7EA96B',
            },
            secondary: {
                light : '#FD904E',
                main : '#FD904E',
                dark : '#FD904E',
            },
            success: {
                light : '#7EA96B',
                main : '#7EA96B',
                dark : '#7EA96B',
            },
            warning: {
                light : '#FD904E',
                main : '#FD904E',
                dark : '#FD904E',
            },
            type: palletType,
        },
        typography: {
            fontFamily: [
                'Montserrat',
            ].join(','),
            h1:{
                fontSize: 30,
                fontWeight: 600,
            },
            h2:{
                fontSize: 20,
                fontWeight: 600,
            },
            h3:{
                fontSize: 16,
                fontWeight: 600,
            },
            h6:{
                fontSize: 300,
                fontWeight: 600,
            },
            subtitle1:{
                fontSize: 14,
            },
            subtitle2:{
                fontSize: 12,
            },
        },
        shape: {
            borderRadius: 20,
        },
    });
    return responsiveFontSizes(theme)
}


