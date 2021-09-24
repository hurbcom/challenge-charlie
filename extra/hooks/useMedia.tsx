import {useEffect, useState} from "react";

//PROPS
//query -> function Media

export function useMedia(query: string) {
    const [matches, setMatches] = useState(false);

    // cDM, cDU
    useEffect(() => {
        let media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        let listener = () => setMatches(media.matches);
        media.addListener(listener);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return matches;
}