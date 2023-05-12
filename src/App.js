import "./App.css";
import { useState } from "react";

function App() {
  // Using hooks to manipulate the position of the block
  // Can be visualized in a 2D-Plane, clicking buttons will change its X and Y position
  const [xPosition, setxPosition] = useState(0);
  const [yPosition, setyPosition] = useState(0);

  return (
    <div className="App">
      <div className="wrapper-container">
        {/* The buttons are disabled using 'disabled ' attribute /*/}
        <button
          className="h-btn"
          disabled={yPosition === 0}
          onClick={() => setyPosition(yPosition - 50)}
        >
          Up
        </button>

        <div className="container">
          <button
            className="v-btn"
            disabled={xPosition === 0}
            onClick={() => setxPosition(xPosition - 50)}
          >
            Left
          </button>
          
          <div className="main-grid">
            <div
              className="box"
              style={{ left: xPosition, top: yPosition }}
            ></div>
          </div>

          <button
            className="v-btn"
            disabled={xPosition === 450}
            onClick={() => setxPosition(xPosition + 50)}
          >
            Right
          </button>

        </div>
        
        <button
          className="h-btn"
          disabled={yPosition === 450}
          onClick={() => setyPosition(yPosition + 50)}
        >
          Bottom
        </button>
      </div>
    </div>
  );
}

export default App;
