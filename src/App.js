import React from 'react';
import logo from './logo.svg';
import './App.css';
import restaurantJson from './restaurants.json';

function App() {
  const restaurantNames = restaurantJson.restaurants.map((restaurant) =>
    <li key={restaurant.name}>
      {restaurant.name}
    </li>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
