export const getWindDirection = (degree:number, language:string = "pt") => {
    let sectors = language === 'en' ? ['N','NE','E','SE','S','SW','W','NW'] : ['N','NE','L','SE','S','SO','O','NO']    
    degree += 22.5;  
    if (degree < 0) 
      degree = 360 - Math.abs(degree) % 360;
    else 
      degree = degree % 360;
    
    let which = Math.floor(degree / 45);
    return sectors[which];
  }