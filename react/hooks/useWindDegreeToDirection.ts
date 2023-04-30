//this function also doesnt need to be a hook and is abstracted only for simplicity sake
function useWindDegreeToDirection(degree:number) {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NO';
    if (degree > 247.5) return 'O';
    if (degree > 202.5) return 'SO';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) {
      return 'NE';
    }
    return 'N';
}

export default useWindDegreeToDirection;