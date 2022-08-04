import React from "react";

export const variantColor = (temperature:number, unit:string) => {
    let color = 'White'
    if (unit === 'metric') {
      switch (true) {
        case (temperature < 15): color = 'Blue'          
          break;
        case (temperature >= 15 && temperature <= 35): color = 'Yellow'          
          break;
        case (temperature > 15): color = 'Red'          
          break;      
        default: color = 'Blue' 
          break;
      }      
    } else {
      switch (true) {
        case (temperature < 59): color = 'Blue'          
          break;
        case (temperature >= 19 && temperature <= 95): color = 'Yellow'          
          break;
        case (temperature > 95): color = 'Red'          
          break;      
        default: color = 'Blue' 
          break;
      }
    }    
    return color as 'Red' | 'Yellow' | 'Blue' 
  }