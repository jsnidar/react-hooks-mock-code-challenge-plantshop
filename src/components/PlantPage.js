import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( {updatePrice, setSearch, plants, addNewPlant, handleDeletePlant }) {
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearch={setSearch} />
      <PlantList handleDeletePlant={handleDeletePlant} updatePrice={updatePrice} plants={plants} />
    </main>
  );
}

export default PlantPage;
