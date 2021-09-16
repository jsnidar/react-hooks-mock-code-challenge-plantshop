import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, updatePrice, handleDeletePlant}) {
  const renderPlantCards = plants.map(plant => <PlantCard key={plant.id} handleDeletePlant={handleDeletePlant} plant={plant} updatePrice={updatePrice} />)
  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;
