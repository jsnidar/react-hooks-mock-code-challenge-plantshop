import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: 0,
  })

  const handleNewPlantSubmit = (event) => {
    event.preventDefault()
    addNewPlant(formData)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if(name === 'price') {
      value = parseFloat(value)
    }

    setFormData( {
      ...formData, 
      [name]: value,
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formData.image} type="url" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
