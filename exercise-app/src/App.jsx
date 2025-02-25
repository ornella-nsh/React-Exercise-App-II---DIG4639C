import { useState } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';
import pushupImage from './assets/pushup.jpg';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  //array of exercises

  const exercises = [
    { name: "Push-ups", type: "repetition" },
    { name: "Running", type: "running" },
    { name: "Plank", type: "repetition" },
    { name: "Burpees", type: "duration" }
    //to have correct execersice image must somehow pass the img as a property as well (?)
  ];

  //variable will hold either Repetition or Duration component
  let exerciseComponent;
  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      exerciseComponent = <RepetitionExercise name={selectedExercise.name} />;
    } else if (selectedExercise.type === "duration") {
      exerciseComponent = <DurationExercise name={selectedExercise.name} />;
    } else if (selectedExercise.type === "running") {
      exerciseComponent = <RunningExercise name={selectedExercise.name} />;
  }};

  //now render different components based on the selected exercise
  //first div: base view: no exercise selected yet => renders list of buttons based on exercise array*/
  //second div: when an exercise is selcted
  return (
    <div className='main-container'>
      {!selectedExercise ? (
        <div>
          <h1>💪 trending workouts</h1>
          <div className='welcome'>
            <h2>
              Evening Jog
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc.
            </p>
          </div>
          <h1>⭐ exercises</h1>
          <div className='exercise-list'>
            {exercises.map(exercise => (
              <button className='exercise-button' key={exercise.name} onClick={() => setSelectedExercise(exercise)}>
                {exercise.name + '         >'}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className='exercisePage'>
          <h2>{selectedExercise.name}</h2>
          <img src={pushupImage} alt='exercise image'/>
          <div className='exerciseItem'>{exerciseComponent}</div>
        </div>
      )}
    </div>
  );
}

export default App;
