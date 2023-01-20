import SunIcon02 from "./../assets/img/2.svg";
import SunIcon07 from "./../assets/img/7.svg";
import SunIcon08 from "./../assets/img/8.svg";
import SunIcon13 from "./../assets/img/13.svg";
import SunIcon15 from "./../assets/img/15.svg";
import SunIcon17 from "./../assets/img/17.svg";
import SunIcon24 from "./../assets/img/24.svg";
import SunIcon45 from "./../assets/img/45.svg";

/**
 * Retorna o icone de acordo com o id
 * @param codeIcon - Codigo do ícone
 * @returns ícone
 */
function getIcon(codeIcon: number) {
    if (codeIcon >= 200 && codeIcon <= 232) return SunIcon15;
    if (codeIcon >= 300 && codeIcon <= 321) return SunIcon24;
    if (codeIcon >= 520 && codeIcon <= 531) return SunIcon24;
    if (codeIcon >= 500 && codeIcon <= 504) return SunIcon17;
    if (codeIcon === 511) return SunIcon07;
    if (codeIcon >= 600 && codeIcon <= 622) return SunIcon07;
    if (codeIcon >= 701 && codeIcon <= 781) return SunIcon13;
    if (codeIcon === 800) return SunIcon02;
    if (codeIcon >= 801 && codeIcon <= 804) return SunIcon08;

    return SunIcon45;
}

export default getIcon;
