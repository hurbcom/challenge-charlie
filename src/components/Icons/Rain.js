import React from 'react';

export function Rain({
    size = 50, 
    color = "black" 
}) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width={size} height={size} viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
       <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M400,96c-5.312,0-10.562,0.375-15.792,1.125
			C354.334,56.417,307.188,32,256,32s-98.312,24.417-128.208,65.125C122.562,96.375,117.312,96,112,96C50.25,96,0,146.25,0,208
			c0,61.75,50.25,112,112,112c13.688,0,27.084-2.5,39.709-7.333C180.666,337.917,217.5,352,256,352
			c38.542,0,75.333-14.083,104.291-39.333C372.916,317.5,386.312,320,400,320c61.75,0,112-50.25,112-112
			C512,146.25,461.75,96,400,96z M400,288c-17.125,0-32.916-5.5-45.938-14.667C330.584,301.625,295.624,320,256,320
			c-39.625,0-74.584-18.375-98.062-46.667C144.938,282.5,129.125,288,112,288c-44.188,0-80-35.812-80-80s35.812-80,80-80
			c10.812,0,21.062,2.208,30.438,6.083C163.667,92.667,206.291,64,256,64s92.334,28.667,113.541,70.083
			C378.938,130.208,389.209,128,400,128c44.188,0,80,35.812,80,80S444.188,288,400,288z M224,448c0,17.688,14.312,32,32,32
			s32-14.312,32-32s-32-64-32-64S224,430.312,224,448z"/>
    </svg>
    
  );
}