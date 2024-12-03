import { useState } from 'react';
import './App.css';
import Exercise1 from './exercises/exercise1'
import { Exercise2 } from './exercises/exercise2';
import { Exercise3 } from './exercises/exercise3';
import { Exercise4 } from './exercises/exercise4';
import { Exercise5 } from './exercises/exercise5';
import { Exercise6 } from './exercises/exercise6';
import Exercise7 from './exercises/exercise7';

function App() {

  const [currentEx, setCurrentEx] = useState('');

  return (
    <div className="App">
      <h1>React GPT Exercises</h1>
      <p>Selecciona un ejercicio para empezar:</p>
      <select onChange={(e)=> setCurrentEx(e.target.value)}>
        <option value="">--Selecciona un ejercicio--</option>
        <option value="exercise1">Ejercicio 1</option>
        <option value="exercise2">Ejercicio 2</option>
        <option value="exercise3">Ejercicio 3</option>
        <option value="exercise4">Ejercicio 4</option>
        <option value="exercise5">Ejercicio 5</option>
        <option value="exercise6">Ejercicio 6</option>
        <option value="exercise7">Ejercicio 7</option>
      </select>

      {/* Aquí se pueden renderizar los ejercicios */}
      {currentEx === 'exercise1' && <Exercise1/>}
      {currentEx === 'exercise2' && <Exercise2/>}
      {currentEx === 'exercise3' && <Exercise3/>}
      {currentEx === 'exercise4' && <Exercise4/>}
      {currentEx === 'exercise5' && <Exercise5/>}
      {currentEx === 'exercise6' && <Exercise6/>}
      {currentEx === 'exercise7' && <Exercise7/>}
    </div>
  );
}

export default App;
