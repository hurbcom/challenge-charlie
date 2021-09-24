import {useEffect, useState} from "react";

export function useNavigator() {
    const [matches, setMatches] = useState('');

    useEffect(() => {
        setMatches(navigator.language);
    }, []);

    return matches;
}