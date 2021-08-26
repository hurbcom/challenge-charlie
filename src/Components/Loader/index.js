import React from "react";
import { StyledLoader, StyledContainer } from "./LoaderStyles";

const Loader = (props) => {
    return (
        <React.Fragment>
            <StyledContainer visible={props.visible}>
                <StyledLoader>
                    <div className="cloud"></div>
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                    <div className="rain"></div>
                </StyledLoader>
            </StyledContainer>
        </React.Fragment>
    );
};

export default Loader;
