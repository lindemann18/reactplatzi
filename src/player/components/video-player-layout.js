import React from 'react';
import './video-player-layout.css';

const VideoPlayerLayout = ({children,setRef})=>(
  <div className="VideoPlayer" ref={setRef}>
    {children}
  </div>
)

export default VideoPlayerLayout;
