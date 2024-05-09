import song from "./assets/audio.mp3";
import video from "./assets/video.mp4";

import "./App.css";

function App() {

  return (
    <div>
      <h2>Media Player</h2>
      <audio controls>
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <video controls height={500} width={500}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video element.
      </video>
    </div>
  );
}

export default App;
