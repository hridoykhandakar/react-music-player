import { useEffect } from "react";
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const iconStyle = {
  cursor: "pointer",
  fontSize: "30px",
};

function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setCurrentSong,
  songs,
  setSongs,
}) {
  // useRef
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);
  // Event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

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
  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        return setCurrentSong(songs[songs.length - 1]);
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)} </p>
        <input
          min={0}
          max={songInfo.duration || "0"}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)} </p>
      </div>
      <div className="play-control">
        <FaAngleLeft
          onClick={() => {
            skipTrackHandler("skip-back");
          }}
          className="skip-back"
          style={iconStyle}
        />
        <div className="btn" onClick={playSongHandler}>
          {isPlaying ? (
            <FaPause style={iconStyle} />
          ) : (
            <FaPlay style={iconStyle} />
          )}
          {/* <FaPlay style={iconStyle} /> */}
        </div>
        <FaAngleRight
          onClick={() => {
            skipTrackHandler("skip-forward");
          }}
          className="skip-forward"
          style={iconStyle}
        />
      </div>
    </div>
  );
}

export default Player;
