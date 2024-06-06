import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video-6XtGR-D3.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (event) => {
        if(event.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer


