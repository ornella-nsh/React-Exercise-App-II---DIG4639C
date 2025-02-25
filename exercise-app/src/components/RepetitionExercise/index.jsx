import { useState } from 'react';
import PropTypes from 'prop-types';

RepetitionExercise.propTypes = {
    name: PropTypes.string.isRequired,
};

function RepetitionExercise({ name }) {
    //count is state variable that will hold amount of reps
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>{name}</p>
      <div>
        <button onClick={increment}>Add +1</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>Repetitions: {count}</p>
    </div>
  );


}

export default RepetitionExercise;