import React from 'react';
import FullScreenIcon from '../../icons/components/fullscreen';
import './full-screen.css';

const FullScreen = ({handleFullScreenClick}) =>(
  <div className="FullScreen" onClick={handleFullScreenClick}>
    <FullScreenIcon  color="white" size="25"/>
  </div>
)

export default FullScreen;
