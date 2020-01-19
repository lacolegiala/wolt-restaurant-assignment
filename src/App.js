import React from 'react';
import './App.css';
import restaurantJson from './restaurants.json';


function App() {
  const restaurantNames = restaurantJson.restaurants.map((restaurant) =>
    <li key={restaurant.name}>
      <img src={restaurant.image} alt={'Picture of ' + restaurant.name} />
      <div className="card-texts">
        <div className="name-description">
          <h2>{restaurant.name}</h2>
          <div>{restaurant.description}</div>
        </div>
        <div className="tags">{restaurant.tags.join(', ')}</div>
      </div>
    </li>
  );
  function sortRestaurants() {
    const restaurantList = Array.from(restaurantJson.restaurants);
    restaurantList.sort(
      (a, b) => a.name.localeCompare(b.name, undefined, {sensitivity: 'base'})
    );
    console.log(restaurantJson.restaurants)
    console.log(restaurantList);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wolt Restaurant List
        </p>
        <button onClick={sortRestaurants}>Sort</button>
        <ul>{restaurantNames}</ul>
      </header>
    </div>
  );
}

export default App;
