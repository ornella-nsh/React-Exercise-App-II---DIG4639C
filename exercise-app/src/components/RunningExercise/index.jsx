import { useState, useEffect } from "react";
import PropTypes from "prop-types";

//based on DurationExercise
RunningExercise.propTypes = {
  name: PropTypes.string.isRequired,
};

function RunningExercise({ name }) {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  //start timer when isRunning is true, stop when isRunning is false
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStop = () => setIsRunning(!isRunning);
  const reset = () => {
    setDuration(0);
    setLaps([]);
  };
  const addLap = () => setLaps([...laps, duration]);

  //set up time, padStart converts the number to a string and pads it with leading zeros to make sure it's at least 2 characters long
  const hours = String(Math.floor(duration / 3600)).padStart(2, "0");
  const minutes = String(Math.floor(duration / 60)).padStart(2, "0");
  const seconds = String(duration % 60).padStart(2, "0");

  return (
    <div>
      <p>{name}</p>
      <div>
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={addLap}>Add Lap</button>
      </div>
      <p>
        Time: {hours}:{minutes}:{seconds}
      </p>
      <div>
        <h3>Laps</h3>
        <ul>
          {laps.map((lap, index) => {
            const lapHours = String(Math.floor(lap / 3600)).padStart(2, "0");
            const lapMinutes = String(Math.floor(lap / 60)).padStart(2, "0");
            const lapSeconds = String(lap % 60).padStart(2, "0");
            return (
              <li key={index} className="laps">
                Lap {index + 1}: {lapHours}:{lapMinutes}:{lapSeconds}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;
