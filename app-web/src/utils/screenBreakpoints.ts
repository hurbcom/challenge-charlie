import { IScreenBreakpoints } from "../interfaces/screenBreakpoints.interface";

// Stores the maximum resolution value for each device, aiding responsiveness by abstracting
// the specific numbers and working with device categories instead.
export const screenBreakpoints: IScreenBreakpoints = {
    mobileXS: '576px',
    mobileSM: '768px',
    tabletsMD: '992px',
    laptopsLG: '1200px',
    desktopXL: '1400px',
    tvXXL: '1920px'
}