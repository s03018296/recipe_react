import react, { useState } from 'react';
import MealList from './MealList';
import './App.css';

function App() {
  const [meal, setMeal] = useState(null);
  const [calories, setCalories] = useState(2000);
  function handleChange(e) {
    setCalories(e.target.value);
  }
  function getMeal() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=e4666d779936403495ece33acbf9a833&timeFrame=day&targetCalories=${calories}`
    )
      .then(response => response.json())
      .then(data => {
        setMeal(data);
        console.log(data);
      })
      .catch(() => {
        console.log('error');
      });
  }
  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories e.g.2000"
          onChange={handleChange}
        />
      </section>
      <button onClick={getMeal}>Get meal</button>
      {meal && <MealList meal={meal} />}
    </div>
  );
}

export default App;
