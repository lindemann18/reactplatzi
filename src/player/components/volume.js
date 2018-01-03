import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

const Volume = ({handleVolumeChange,handleClickVolume,value})=>(
  <button className="Volume">
    <div onClick={handleClickVolume}>
      <VolumeIcon color="white" size="25" handleClickVolume={handleClickVolume}/>
    </div>
    <div className="Volume-range">
      <input type="range"  min={0} max={1} step={.05} onChange={handleVolumeChange} value={value}/>
    </div>
  </button>
)

export default Volume;
