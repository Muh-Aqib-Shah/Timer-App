import { styled } from "styled-components";

type ButtonWrapperProps = {
  second_unit: string,
  second_tens: string,
  minute_unit: string,
  minute_tens: string
}

export const StyledTimeWrapper = styled.div<ButtonWrapperProps>`

.frame{
    width: 400px;
    border-radius: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .time-box{
    background-color: black;
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .digit-box{
    width: 35%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
  
  .bit{
    width: 60%;
    height: 10%;
    background-color: red;
    border-radius: 0 0 100% 100%;
    opacity: 0;
  
  }
  #top{
    text-decoration: none;
  }
  #top-left{
    transform:  translate(-50%,100%) rotate(-90deg);
  }
  #top-right{
    transform:  translate(50%,0) rotate(90deg);
  }
  #middle{
    transform:  translate(0,100%) rotate(180deg)
  }
  #btm-right{
    transform:  translate(50%,200%) rotate(90deg)
  }
  #btm{
    transform:  translate(0,250%) rotate(180deg);
  }
  #btm-left{
    transform:  translate(-50%,0) rotate(-90deg);
  }
  .digits{
    width: 80%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
  }
  .unit,.tens{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
  .second .unit .${({second_unit})=> second_unit}{
    opacity: 1;
  }
  .second .tens .${({second_tens})=> second_tens}{
    opacity: 1;
  }
  .minute .unit .${({minute_unit})=> minute_unit}{
    opacity: 1;
  }
  .minute .tens .${({minute_tens})=> minute_tens}{
    opacity: 1;
  }
  .break{
    width: 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
  }
  .dot-pair{
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    animation: blink 2s linear 0s infinite normal ;
    opacity: 0;
  
  }
  @keyframes blink{
    0% ,10%,20%,30%,40%,50%{
      opacity: 0;
    }
    60%,70%,80%,90%,100%{
      opacity: 1;
    }
  }`