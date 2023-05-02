import React, { PropsWithChildren } from "react";
import { Content, Wrapper } from "./style";

function ForecastWrapper({ children }: PropsWithChildren) {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    );
}

export default ForecastWrapper;
