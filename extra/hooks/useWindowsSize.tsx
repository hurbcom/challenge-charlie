import {useEffect, useState} from "react";

//Interface
import { useWindowsSizeInterface} from "../interfaces/useWindowsSize";

//Value width to mobile
const mobile = 850

export function useWindowSize() {
    // @ts-ignore
    const [windowSize, setWindowSize] : useWindowsSizeInterface = useState({
        width: 100,
        height: 100,
        scrollHeight: 0,
        mobile: false ,
        webLeft: 'left' ,
        webRight: 'right',
        webFlexStart:'flex-start' ,
        webFlexEnd:'flex-end',
        grid1: 1,
        grid2: 2,
        grid3: 3,
        grid4: 4,
        grid5: 5,
        grid6: 6,
        grid7: 7,
        grid8: 8,
        grid9: 9,
        grid10: 10,
        grid11: 11,
        grid12: 12,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight > document.body.offsetHeight ? window.innerHeight : document.body.offsetHeight,
                scrollHeight: document.body.scrollHeight,
                mobile: window.innerWidth < mobile ,
                webLeft: window.innerWidth < mobile ? 'center' : 'left' ,
                webRight: window.innerWidth < mobile ? 'center' : 'right',
                webFlexStart: window.innerWidth < mobile ? 'center' : 'flex-start' ,
                webFlexEnd: window.innerWidth < mobile ? 'center' : 'flex-end',
                grid1: window.innerWidth < mobile ? 12 : 1,
                grid2: window.innerWidth < mobile ? 12 : 2,
                grid3: window.innerWidth < mobile ? 12 : 3,
                grid4: window.innerWidth < mobile ? 12 : 4,
                grid5: window.innerWidth < mobile ? 12 : 5,
                grid6: window.innerWidth < mobile ? 12 : 6,
                grid7: window.innerWidth < mobile ? 12 : 7,
                grid8: window.innerWidth < mobile ? 12 : 8,
                grid9: window.innerWidth < mobile ? 12 : 9,
                grid10: window.innerWidth < mobile ? 12 : 10,
                grid11: window.innerWidth < mobile ? 12 : 11,
                grid12: window.innerWidth < mobile ? 12 : 12,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}