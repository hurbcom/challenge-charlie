import styled from "styled-components";

export const TemperatureStyles = styled.div`
    h2{
        text-transform: uppercase;
    }
    .temp-container{
        width: 100%;
        color: #fff;
        .temperature{
            padding: 18px 85px 70px;        
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: relative;
            .icon{
                font-size: 300px;
                position: absolute;
                left: 70px;
                top: 50%;
                transform: translateY(-50%);
            }
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
                h3{
                    text-transform: capitalize;
                }
                p{
                    font-size: 28px;
                }
            }
            .details,
            .icon{
                display: none;
            }
            &:hover{
                .details,
                .icon{
                    display:block;
                }
            }
            
        }
        
        
    }
   
`;

