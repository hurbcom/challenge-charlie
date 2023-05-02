import React from "react";
import useImageUrl from "@hooks/useImageurl";
import { BackgroundWithImage, Overlay } from "./style";

export default () => {
    const { src } = useImageUrl();

    return (
        <BackgroundWithImage role="aria-hidden" image={src}>
            <Overlay />
        </BackgroundWithImage>
    );
};
