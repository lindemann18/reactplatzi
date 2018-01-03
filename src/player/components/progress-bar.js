import React from 'react';
import './progress-bar.css';

const ProgressBar = ({duration,value,handleProgressChange}) =>(
  <div className="ProgressBar">
    <input type="range" min={0} max={duration} value={value} onChange={handleProgressChange}/>
  </div>
)

export default ProgressBar;
