import classNames from "@/utils/classnames";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const HeroImage = ({ src, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <div className="absolute h-full w-full min-h-screen top-0 left-0 -z-10">
            <div
                className={classNames(
                    "relative w-full h-full transition-opacity duration-150",
                    imageLoaded ? "opacity-100" : "opacity-0"
                )}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    data-testid="hero-image"
                    onLoad={handleImageLoaded}
                />
            </div>
        </div>
    );
};

export default HeroImage;
