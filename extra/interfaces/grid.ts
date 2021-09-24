import {GridDirection , GridJustification , GridSize } from "@material-ui/core";
import React, {CSSProperties} from "react";

export interface GridInterfaceNumber {
    number ?: GridSize,
    children ?: React.ReactNode,
    justifyContent ?: GridJustification,
    style ?: CSSProperties,
    directions ?: GridDirection
}

export interface GridInterface {
    children ?: React.ReactNode,
    justifyContent ?: GridJustification,
    style ?: CSSProperties,
    directions ?: GridDirection
}