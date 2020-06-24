import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledTemperature = styled.div`

    h2{
        text-transform: uppercase;
    }
    .temp-container{
        width: 100%;
        
        color: #fff;
        .temperature{
            padding: 18px 85px 70px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            &:nth-child(1){
                background: linear-gradient(to right, rgba(40,40,40,.9) 0%, rgba(70,70,70,.9) 100%);
            }
            &:nth-child(2){
                background: linear-gradient(to right, rgba(60,60,60,.9) 0%, rgba(90,90,90,.9) 100%);
            }
            &:nth-child(3){
                background: linear-gradient(to right, rgba(80,80,80,.9) 0%, rgba(110,110,110,.9) 100%);
            }
            .info{
                font-family: Arial;
                width: 345px;
                &:not(:first-child){
                    margin-top: 55px;
                }
                h2,h3{
                    margin-bottom: 25px;
                    line-height: 100%;
                    font-size: 32px;
                }
                p{
                    font-size: 28px;
                }
            }
            .details{
                display: none;
            }
            &:hover{
                .details{
                    display:block;
                }
            }
            
        }
        
        
    }
   
`;

class Temperature extends Component {

  render() {
    return (
      <StyledTemperature>
        <div className="temp-container">
            <div className="temperature">
                <div className="info">
                    <h2>Hoje</h2>
                    <p>32°C</p>
                </div>
                <div className="info details">
                    <h3>Ensolarado</h3>
                    <p>Vento: NO 6.4km/h</p>
                    <p>Pressão: 1003hPA</p>
                </div> 
            </div>
            <div className="temperature">
                <div className="info">
                    <h2>Amanhã</h2>
                    <p>25°C</p>
                </div>
                <div className="info details">
                    <h3>Ensolarado</h3>
                    <p>Vento: NO 6.4km/h</p>
                    <p>Pressão: 1003hPA</p>
                </div> 
            </div>
            <div className="temperature">
                <div className="info">
                    <h2>Depois de amanhã</h2>
                    <p>22°C</p>
                </div>
                <div className="info details">
                    <h3>Ensolarado</h3>
                    <p>Vento: NO 6.4km/h</p>
                    <p>Pressão: 1003hPA</p>
                </div> 
            </div>
        </div>
        
      </StyledTemperature>
    );
  }
}

export default Temperature;