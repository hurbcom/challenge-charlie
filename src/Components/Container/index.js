import React from "react";
import { StyledContainer } from "./ContainerStyles";

const Container = (props) => {
    return (
        <>
            <StyledContainer>{props.children}</StyledContainer>
        </>
    );
};

export default Container;
