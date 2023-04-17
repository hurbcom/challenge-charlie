import React from "react";
import TextButton from "@components/TextButton";
import useScaleToggle from "../hooks/useScaleToggle";

const ToggleScaleButton = ({ temperature }: { temperature: number }) => {
    const { scaledTemperature, changeScale } = useScaleToggle(temperature);
    return <TextButton onClick={changeScale}>{scaledTemperature}</TextButton>;
};

export default ToggleScaleButton;
