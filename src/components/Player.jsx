import { useRef, useState } from "react";
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const iconStyle = {
  cursor: "pointer",
  fontSize: "30px",
};

function Player({ currentSongs, isPlaying, setIsPlaying }) {
  // useRef
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  function timeUpdateHandler(e) {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  }
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  // use state

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)} </p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)} </p>
      </div>
      <div className="play-control">
        <FaAngleLeft className="skip-back" style={iconStyle} />
        <div className="btn" onClick={playSongHandler}>
          {isPlaying ? (
            <FaPause style={iconStyle} />
          ) : (
            <FaPlay style={iconStyle} />
          )}
          {/* <FaPlay style={iconStyle} /> */}
        </div>
        <FaAngleRight className="skip-forward" style={iconStyle} />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSongs.audio}
      ></audio>
    </div>
  );
}

export default Player;
