import React from 'react';
import './App.css';
import restaurantJson from './restaurants.json';

function App() {
  const restaurantNames = restaurantJson.restaurants.map((restaurant) =>
    <li key={restaurant.name}>
      <img src={restaurant.image} alt={'Picture of ' + restaurant.name} />
      <h2>{restaurant.name}</h2>
      <div>{restaurant.description}</div>
    </li>
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wolt Restaurant List
        </p>
        <ul>{restaurantNames}</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
