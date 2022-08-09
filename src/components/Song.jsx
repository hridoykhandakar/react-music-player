function Song({ currentSongs }) {
  return (
    <div className="song-container">
      <div className="song-img">
        <img src={currentSongs.cover} alt="" />
      </div>
      <h1>{currentSongs.name}</h1>
      <h2>{currentSongs.artist}</h2>
    </div>
  );
}

export default Song;
