import { useState } from 'react';
import './App.css';
import Exercise1 from './exercises/exercise1'
import { Exercise2 } from './exercises/exercise2';

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
      </select>

      {/* Aquí se pueden renderizar los ejercicios */}
      {currentEx === 'exercise1' && <Exercise1/>}
      {currentEx === 'exercise2' && <Exercise2/>}
    </div>
  );
}

export default App;
