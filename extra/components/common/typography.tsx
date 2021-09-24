import React from "react";
import {Typography} from "@material-ui/core";
import type { TypographyProps } from "@material-ui/core";

export function TypographyCustom(props: TypographyProps<"div">){
    return(
        <Typography style={props.style ?? {cursor:'default'}}
                    {...props}>
            {props.children}
        </Typography>
    )
}