import React from 'react';
import './timer.css';

function leftPad (number){
  const pad = '00';
  return pad.substring(0,pad.length - number.length) + number
}

function formatedTime(secs){
  const minutes = parseInt(secs/60,10);
  const seconds    = parseInt(secs%60,10);
  return `${leftPad(minutes)}:${leftPad(seconds.toString())}`;
}

const Timer = ({duration,currentTime}) =>(
  <div className="Timer">
    <p>
      <span>
        {
        /*  currentTime < 60?
          '00:'+(currentTime<9?'0'+currentTime:currentTime) :
          (currentTime/60<=9?'0'+Math.floor(currentTime/60):Math.floor(currentTime/60))+":"+
          (currentTime%60<=9?'0'+currentTime%60:currentTime%60)*/
          formatedTime(currentTime)
        }
        / {`${Math.floor(duration/60)}:${(duration%60).toFixed(0)}`}</span>
    </p>
  </div>
);

export default Timer;
