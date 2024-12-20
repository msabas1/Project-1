import { useLocation } from 'react-router-dom'
import { useState } from "react";

const UpdateItem = (props) => {
    const { state } = useLocation()
    const [formData, setFormData] = useState(state)
  
    const handleChange = (evt) => {
      const {name, value} = evt.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleUpdateItem(formData)
    }

    return ( 
        <>
          <main >
            <h1>Update Item</h1>
            <div>
              <form aria-label="Update Item Form" onSubmit={handleSubmit}>
              <fieldset>
                  <legend>Name</legend>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter item name"
                    autoComplete="off"
                  />
                </fieldset>
              <fieldset>
                  <legend>Description</legend>
                  <input
                    required
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter item description"
                    autoComplete="off"
                  />
                </fieldset>
              <fieldset>
                  <legend>Price</legend>
                  <input
                    required
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter item price"
                    autoComplete="off"
                  />
                </fieldset>
              <fieldset>
                  <legend>Quantity</legend>
                  <input
                    required
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Enter item quantity"
                    autoComplete="off"
                  />
                </fieldset>
                <fieldset>
                <legend>Warehouse ID</legend>
                <select aria-label="Select Warehouse for the item" name="warehouse" onChange={handleChange}>
                  <option value={formData.warehouseId}>--</option>
                  {props.warehouses.map(warehouse => (
                    <option key={warehouse.warehouseId} value={formData.warehouseId} onChange={handleChange}>{warehouse.warehouseId}</option>
                  ))}
                </select>
              </fieldset>
                <button aria-label="Submit update to this item" type="submit" className="formButton">Submit</button>
              </form>
            </div>
          </main>
        </>
       );
}

export default UpdateItem;