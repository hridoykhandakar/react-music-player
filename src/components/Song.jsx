function Song({ currentSong }) {
  return (
    <div className="song-container">
      <div className="song-img">
        <img src={currentSong.cover} alt="" />
      </div>
      <h1>{currentSong.name}</h1>
      <h2>{currentSong.artist}</h2>
    </div>
  );
}

export default Song;
