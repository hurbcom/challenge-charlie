import classNames from "@/utils/classnames";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const HeroImage = ({ src, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true);
    }, []);

    return (
        <div className="absolute h-full w-full min-h-screen top-0 left-0 -z-10">
            <div
                className={classNames(
                    "transition-opacity duration-500",
                    imageLoaded ? "opacity-100" : "opacity-0"
                )}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority={true}
                    onLoad={handleImageLoaded}
                />
            </div>
        </div>
    );
};

export default HeroImage;
