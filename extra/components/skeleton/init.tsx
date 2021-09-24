import React from "react";
import {Grid, useTheme} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
import {alpha} from "@material-ui/core/styles";

//Components
import {Grid12, Grid6} from "../common/grid";

export function SkeletonInit(){
    const theme = useTheme();
    return(
        <>
            <Grid12 style={{
                paddingTop:10,
                backgroundColor:alpha(theme.palette.background.paper, 0.8)
            }}>
                <Grid6>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Skeleton variant="circle" width={200} height={200}/>
                    </Grid>
                </Grid6>
                <Grid6 justifyContent={'center'} style={{marginTop:10,marginBottom:10}}>
                    <Skeleton width={'80%'} height={40}/>
                    <Skeleton width={'80%'} height={40}/>
                    <Skeleton width={'80%'} height={40}/>
                    <Skeleton width={'80%'} height={40}/>
                    <Skeleton width={'80%'} height={40}/>
                    <Skeleton width={'80%'} height={40}/>
                </Grid6>
            </Grid12>
            <Grid12 style={{
                backgroundColor:alpha(theme.palette.background.paper, 0.9)
            }}>
                <Grid6>
                </Grid6>
                <Grid6 justifyContent={'center'} style={{marginTop:10,marginBottom:10}}>
                    <Skeleton width={'80%'} height={40}/>
                    <Skeleton width={'80%'} height={40}/>
                </Grid6>
            </Grid12>
            <Grid12 style={{
                borderBottomLeftRadius:theme.shape.borderRadius,
                borderBottomRightRadius:theme.shape.borderRadius,
                backgroundColor:alpha(theme.palette.background.paper, 0.8)
            }}>
                <Grid6>
                </Grid6>
                <Grid6 justifyContent={'center'} style={{
                    marginTop:10,
                    marginBottom:10
                }}>
                    <Skeleton width={'80%'} height={40}/>
                    <Skeleton width={'80%'} height={40}/>
                </Grid6>
            </Grid12>
        </>
    )
}