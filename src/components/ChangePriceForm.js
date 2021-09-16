import React, {useState} from 'react';

const ChangePriceForm = ({setPrice, id, updatePrice}) => {
    const [formPrice, setFormPrice] = useState('')
    
    const handleChangePriceSubmit = (event) => {
        event.preventDefault()
        setPrice(parseFloat(parseFloat(formPrice)))
        updatePrice(parseFloat(formPrice), id)
    }
    return (
        <form onSubmit={handleChangePriceSubmit}>
            <label>Change Price: </label>
            <input type='text' onChange={(e)=> setFormPrice(e.target.value)} value={formPrice} placeholder='Enter new price here...'></input>
            <button type='submit'>Submit Price Change</button>
        </form>
        
    )
}

export default ChangePriceForm;