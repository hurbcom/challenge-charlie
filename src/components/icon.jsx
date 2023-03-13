import React from "react";

const Icon = ({ svg: Svg, width, height }) => {
    return (
        <div className="relative w-full h-full">
            <Svg
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                preserveAspectRatio="xMidYMid meet"
            />
        </div>
    );
};

export default Icon;
