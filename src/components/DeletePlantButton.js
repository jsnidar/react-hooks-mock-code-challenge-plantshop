import React from 'react';

const DeletePlantButton = ({handleDeletePlant, id}) => {
    function removePlant() {
        handleDeletePlant(id)
    }
    return (
        <button onClick={() => removePlant()}>Remove Plant</button>
    )
}

export default DeletePlantButton;