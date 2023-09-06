import { useEffect, useState } from "react"
import { StyledTimeWrapper } from "./Time.styles"
import { TimeBite } from "./TimeBits"


function numbertoWord(index: number){
    let dataset = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    return dataset[index%10];
}

let interval : NodeJS.Timer

export const Clock = () => {
    
    type ClockType={
        clockRunning: boolean,
        clockReseted: boolean
    }
    type TimeType = {
        second: number,
        minute:number
    }

    let [timedata,setTimeData] = useState<TimeType>({second:0,minute:0})
    let [TimeManager,SetTimeManager] = useState<ClockType>({clockRunning: true,clockReseted: false})
    
    useEffect(()=>{
    
        if(TimeManager.clockRunning){
    
        interval = setInterval(()=>{
            setTimeData(prev => prev.second === 59 ? {second: 0,minute:prev.minute+1} : {...prev,second: prev.second+1})
        },1000)
    
        }
    
        return ()=> clearInterval(interval)
        },[TimeManager])
    
        if(TimeManager.clockReseted){
            setTimeData({second: 0,minute:0})
            SetTimeManager({clockRunning: false,clockReseted: false})
        }

    function ClickHandler(type: string){
    
        if(type === "clock-btn3"){
           if(!TimeManager.clockReseted)
              SetTimeManager({clockRunning: false,clockReseted: true}) }
        else if(type === "clock-btn2"){
            if(TimeManager.clockRunning)
                 SetTimeManager({clockRunning: false,clockReseted: false}) }
        else if(type === "clock-btn1"){
            if(!TimeManager.clockRunning)
               SetTimeManager({clockRunning:true,clockReseted: false})  }
        else
         return 0;
       
        type === "clock-btn3" ? document?.getElementById(type)?.classList?.toggle(`${TimeManager.clockReseted}`)
             :  document?.getElementById(type)?.classList?.toggle(`${TimeManager.clockRunning}`);
      
        
    }

    return(
        <div className="Clock">
            <div className="active" />
         <div className="buttonSection" id="btn-sct">

        <div className="buttons" >
        
        <div className="btn-box">
            <p>Start</p>
           <center> <button className= "fn-btns"  id="clock-btn1" data-testid="clock-btn" onClick={() => ClickHandler("clock-btn1")}></button> </center>
        </div>

        <div className="btn-box">
            <p>Stop</p>
           <center> <button className="fn-btns" id="clock-btn2" data-testid="clock-btn" onClick={() => ClickHandler("clock-btn2")}></button> </center>
        </div>

        <div className="btn-box">
            <p>Reset</p>
           <center> <button className="fn-btns" id="clock-btn3" data-testid="clock-btn" onClick={() => ClickHandler("clock-btn3")}></button> </center>
        </div>

        </div>

        </div>
        
        <StyledTimeWrapper second_unit={numbertoWord(timedata.second)} second_tens={numbertoWord(Math.floor(timedata.second/10)%10)} minute_unit={numbertoWord(Math.floor(timedata.minute))} minute_tens={numbertoWord(Math.floor(timedata.minute/10)%10)}>
        <div className="frame">
            <div className="time-box">
            <div className="digit-box minute">
                <div className="tens">
                <TimeBite />
                </div>
                <div className="unit">
                <TimeBite />
                </div>

            </div>
            <div className="break">
               <div className="dot-pair" />
               <div className="dot-pair" />
            </div>
            <div className="digit-box second">
                <div className="tens">
                <TimeBite />
                </div>
                <div className="unit">
                <TimeBite />
                </div>
            </div>  
            </div>
        </div>
        </StyledTimeWrapper>

        <div className='clockstand' id="stand1"/>
        <div className='clockstand' id="stand2"/>
        </div>
        
    )
}