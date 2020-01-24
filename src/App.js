import React, { useState } from 'react';
import './App.css';
import restaurantJson from './restaurants.json';


function App() {
  const [ isAscending, setIsAscending ] = useState(true);

  const restaurantList = Array.from(restaurantJson.restaurants);
  function sortRestaurantsAscending() {
    restaurantList.sort(
      (a, b) => a.name.localeCompare(b.name, undefined, {sensitivity: 'base'})
    );
  }
  function sortRestaurantsDescending() {
    restaurantList.sort(
      (a, b) => b.name.localeCompare(a.name, undefined, {sensitivity: 'base'})
    );
  }
  if (isAscending === true) {
    sortRestaurantsAscending();
  }
  else {
    sortRestaurantsDescending();
  }

  const restaurantNames = restaurantList.map((restaurant) =>
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

  function setRestaurantOrder() {
    if (isAscending === true) {
      setIsAscending(false);
    }
    else {
      setIsAscending(true);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wolt Restaurant List
        </p>
        <button onClick={setRestaurantOrder}>
          {isAscending === true ? 'Sort descending' : 'Sort ascending'}
        </button>
        <ul>
          {restaurantNames}
        </ul>
      </header>
    </div>
  );
}

export default App;
