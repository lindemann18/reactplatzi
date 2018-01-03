// Dependencies //
import React,{Component} from 'react';
// Components //
import VideoPlayerLayout from '../components/video-player-layout';
import Video             from '../components/video';
import Title             from '../components/title';
import PlayPause         from '../components/play-pause';
import Timer             from '../components/timer';
import Controls          from '../components/video-player-controls';
import ProgressBar       from '../components/progress-bar';
import Spinner           from '../components/spinner';
import Volume            from '../components/volume';
import FullScreen        from '../components/full-screen';

class VideoPlayer extends Component{
  state = {pause: true,duration:0,currentTime:0,loading: false,volume: 1};

  togglePlay = (e)=> {
    this.setState({
      pause: !this.state.pause
    });
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetaData  = event=>{
      this.video = event.target;
      this.setState({
        ...this.state,
        duration: this.video.duration
      });
  }

  handleClick = e =>{
    this.togglePlay();
  }

  handleTimeUpdate = e =>{
    this.setState({
      ...this.state,
      currentTime: Math.floor(this.video.currentTime)
    });
  }

  handleProgressChange = (e) =>{
    console.log(e.target.value);
    this.setState({
      ...this.state,
      currentTime: e.target.value
    });
    this.video.currentTime =  e.target.value;
  }

    handleSeeking = (e) =>{
      this.setState({
        ...this.state,
        loading: true
      })
    }

    handleSeeked = (e) =>{
      this.setState({
        ...this.state,
        loading: false
      })
    }

    handleVolumeChange = (e) =>{
      this.video.volume = e.target.value;
    }

    handleClickVolume = (e) =>{
      this.setState({
        ...this.state,
        volume: (this.state.volume!==0)?0:1
      });
      this.video.volume = this.state.volume;
    }

    handleFullScreenClick = (e)=>{
      if(!document.webkitIsFullScreen){
          this.player.webkitRequestFullScreen();
      }else{
          document.webkitExitFullscreen();
      }
    }

    setRef = (element)=>{
      this.player = element;
      console.log(this.player);
    }

  render()
  {
    return(
      <div>
        <VideoPlayerLayout setRef = {this.setRef}>
          <Title title={this.props.title} />
          <Controls>
            <PlayPause handleClick={this.togglePlay} pause={this.state.pause} />
            <Timer duration={this.state.duration} currentTime = {this.state.currentTime}/>
            <ProgressBar duration={this.state.duration} value={this.state.currentTime} handleProgressChange={this.handleProgressChange}/>
            <Volume value={this.state.volume} handleVolumeChange={this.handleVolumeChange} handleClickVolume={this.handleClickVolume}/>
            <FullScreen handleFullScreenClick = {this.handleFullScreenClick}/>
          </Controls>
          <Spinner active={this.state.loading}/>
          <Video
            autoplay={this.props.autoplay}
            pause={this.state.pause}
            handleLoadedMetaData={this.handleLoadedMetaData}
            handleClick={this.handleClick}
            handleTimeUpdate = {this.handleTimeUpdate}
            handleSeeking = {this.handleSeeking}
            handleSeeked = {this.handleSeeked}
            src={this.props.src}
          title={this.props.title}/>
        </VideoPlayerLayout>
      </div>
    )
  }
}

export default VideoPlayer;
