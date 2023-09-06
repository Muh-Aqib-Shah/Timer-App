import { createGlobalStyle,styled } from "styled-components";

export const GlobalStyle= createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi+Fun:wght@500&display=swap');

*{
    margin:0;
    box-sizing:border-box;
}
.App{
    height: 100vh;
    background-color: moccasin;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p{
    margin: 0;
    color: white;
  }
`

export const StyledWrapper = styled.div`
.Clock{
    background-color: slategrey;
    height: 30vh;
    width: 50vw;
    border-radius: 10px;
    position: relative;
    display: flex;
  }

  .Clock .clockstand{
    position: absolute;
    top:80%;
   
  }
  #stand1{
    left:20%;
  }
  #stand2{
    left: 70%;
  }  
  
  .buttonSection{
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
  }
  
  .Clock .active{
    position: absolute;
    top: 5%;
    left: 2%;
    background-color: lawngreen;
  }
  .active{
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  
  .buttons{
    width: 100%;
    height: auto;
    z-index: 1;
  }
  
  
  .btn-box{
    display: inline-block;
    margin: 15px 30px;
  }
  
  .fn-btns{
    border-radius: 50%;
    width: 20px;
    height: 20px
  }

  .clockstand{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: slategrey;
  }
  
`