import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

DurationExercise.propTypes = {
  name: PropTypes.string.isRequired,
};

//track how much time has passed, start at 0 + timer not running
function DurationExercise({ name }) {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //start timer when isRunning is true, stop when isRunning is false
  useEffect(() => {
    let timer;
    //function to add to timer is excetued every second (1000ms) => https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
    if (isRunning) {
      timer = setInterval(() => {
        setDuration(prevDuration => prevDuration + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStop = () => setIsRunning(!isRunning);
  const reset = () => setDuration(0);

  //set up time, padStart converts the number to a string and pads it with leading zeros to make sure it's at least 2 characters long (via Copilot)
  const hours = String(Math.floor(duration / 3600)).padStart(2, '0');
  const minutes = String(Math.floor(duration / 60)).padStart(2, '0');
  const seconds = String(duration % 60).padStart(2, '0');

  return (
    <div>
      <p>{name}</p>
      <div>
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>Time: {hours}:{minutes}:{seconds}</p>
    </div>
  );
}

export default DurationExercise;