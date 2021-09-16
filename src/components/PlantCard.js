import React, {useState} from "react";
import ChangePriceForm from "./ChangePriceForm";
import DeletePlantButton from "./DeletePlantButton";

function PlantCard( {plant, updatePrice, handleDeletePlant}) {
  
  const [inStock, setInStock] = useState(true)
  const [price, setPrice] = useState(plant.price)

  

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>
      <ChangePriceForm updatePrice={updatePrice} setPrice={setPrice} id={plant.id} />
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)} >Out of Stock</button>
      )}
      <DeletePlantButton handleDeletePlant={handleDeletePlant} id={plant.id} />
    </li>
  );
}

export default PlantCard;
