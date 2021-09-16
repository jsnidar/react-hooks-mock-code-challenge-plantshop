import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  const dbURL= 'http://localhost:6001/plants'

  useEffect(() => {
    fetch(dbURL)
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

const addNewPlant = (newPlant) => {
  fetch(dbURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPlant)
  })
  .then(r => r.json())
  .then(newPlant => setPlants([...plants, newPlant]))
}

const updatePrice = (price, id) => {
  fetch(dbURL +'/' + id, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      price: price
    })
  })
}

const handleDeletePlant = (id) => {
  fetch(dbURL + '/' + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": 'application/json'
    }
  })
  .then(setPlants(plants.filter(plant => plant.id !== id)))
}

const filteredPlants = plants.filter(plant => plant.name.toUpperCase().startsWith(search.toUpperCase()))
console.log(plants)
  return (
    <div className="app">
      <Header />
      <PlantPage handleDeletePlant={handleDeletePlant} updatePrice={updatePrice} setSearch={setSearch} addNewPlant={addNewPlant} plants = {filteredPlants}  />
    </div>
  );
}

export default App;
