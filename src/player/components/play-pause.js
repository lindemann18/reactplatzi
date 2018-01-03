import React from 'react';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import './play-pause.css';

const PlayPause = ({handleClick,pause})=> (
  <div className="PlayPause">
    {
      pause ?
      <button onClick={handleClick}><Play  size={25} color="white"/></button>
      :
      <button onClick={handleClick}><Pause  size={25} color="white"/></button>
    }
  </div>
)

export default PlayPause;
