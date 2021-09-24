import React from "react";
import {Grid} from "@material-ui/core";

//Hooks
import {useWindowSize} from "../../hooks/useWindowsSize";

//Interfaces
import {GridInterface, GridInterfaceNumber} from "../../interfaces/grid";

export function GridNumber (props:GridInterfaceNumber){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={props.number}
            xl={props.number}
            sm={props.number}
            md={props.number}
            lg={props.number}>
            {props.children}
        </Grid>
    )
}



export function Grid1 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid1}
            xl={size.grid1}
            sm={size.grid1}
            md={size.grid1}
            lg={size.grid1}>
            {props.children}
        </Grid>
    )
}

export function Grid2 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid2}
            xl={size.grid2}
            sm={size.grid2}
            md={size.grid2}
            lg={size.grid2}>
            {props.children}
        </Grid>
    )
}

export function Grid3 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid3}
            xl={size.grid3}
            sm={size.grid3}
            md={size.grid3}
            lg={size.grid3}>
            {props.children}
        </Grid>
    )
}

export function Grid4 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid4}
            xl={size.grid4}
            sm={size.grid4}
            md={size.grid4}
            lg={size.grid4}>
            {props.children}
        </Grid>
    )
}

export function Grid5 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid5}
            xl={size.grid5}
            sm={size.grid5}
            md={size.grid5}
            lg={size.grid5}>
            {props.children}
        </Grid>
    )
}

export function Grid6 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid6}
            xl={size.grid6}
            sm={size.grid6}
            md={size.grid6}
            lg={size.grid6}>
            {props.children}
        </Grid>
    )
}

export function Grid7 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid7}
            xl={size.grid7}
            sm={size.grid7}
            md={size.grid7}
            lg={size.grid7}>
            {props.children}
        </Grid>
    )
}

export function Grid8 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid8}
            xl={size.grid8}
            sm={size.grid8}
            md={size.grid8}
            lg={size.grid8}>
            {props.children}
        </Grid>
    )
}

export function Grid9 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid9}
            xl={size.grid9}
            sm={size.grid9}
            md={size.grid9}
            lg={size.grid9}>
            {props.children}
        </Grid>
    )
}

export function Grid10 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid10}
            xl={size.grid10}
            sm={size.grid10}
            md={size.grid10}
            lg={size.grid10}>
            {props.children}
        </Grid>
    )
}

export function Grid11 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid11}
            xl={size.grid11}
            sm={size.grid11}
            md={size.grid11}
            lg={size.grid11}>
            {props.children}
        </Grid>
    )
}

export function Grid12 (props:GridInterface){
    const size = useWindowSize()
    return(
        <Grid
            {...props}
            container
            item
            justifyContent={props.justifyContent ?? size.webFlexStart}
            xs={size.grid12}
            xl={size.grid12}
            sm={size.grid12}
            md={size.grid12}
            lg={size.grid12}>
            {props.children}
        </Grid>
    )
}