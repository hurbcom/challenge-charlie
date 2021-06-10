//medidas de direção do tempo baseadas https://content.meteoblue.com/pt/especificacoes/variaveis-meteorologicas/vento

export function windDirection(deg: number) {
    if (deg <= 0 || deg >= 360) return 'N';
    if (deg <= 45) return 'NE ';
    if (deg <= 95) return 'L ';
    if (deg <= 135) return 'SE ';
    if (deg <= 180) return 'S ';
    if (deg <= 225) return 'S0 ';
    if (deg <= 270) return 'O ';
    if (deg <= 325) return 'N0 ';
}
