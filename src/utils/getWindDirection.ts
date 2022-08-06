export const getWindDirection = (degree:number, language:string) => {
    let sectors = language === 'en' ? ['Northerly','North Easterly','Easterly','South Easterly','Southerly','South Westerly','Westerly','North Westerly'] : ['Norte','Nordeste','Leste','Sudeste','Sul','Sudoeste','Oeste','Noroeste']    
    degree += 22.5;  
    if (degree < 0) 
      degree = 360 - Math.abs(degree) % 360;
    else 
      degree = degree % 360;
    
    let which = Math.floor(degree / 45);
    return sectors[which];
  }