import { useEffect, useState } from "react";

const useLocationNameByUserLocation = (userLocation: string) => {
    const [location, setLocation] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");

    useEffect(() => {
        if (userLocation) {
            setLocation(userLocation);
            setInputText(userLocation);
        }
    }, [userLocation]);

    const onBlur = () => {
        setLocation(inputText);
    };

    return { location, inputText, onBlur, setInputText };
};

export default useLocationNameByUserLocation;
