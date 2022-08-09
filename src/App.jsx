import { useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
// import utils
import data from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSongs, setCurrentSongs] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="app">
      <Song currentSongs={currentSongs} />
      <Player
        currentSongs={currentSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </main>
  );
}

export default App;
