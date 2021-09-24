import React from 'react';
import {Box} from "@material-ui/core";

//Interface
import {ContainerInterface} from "../../interfaces/container";

export function Container({children}: ContainerInterface){
    return(
        <Box>
            {children}
        </Box>
    )
}
