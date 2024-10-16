const API_URL = "http://localhost:8080/warehouse";

  async function getAllWarehouses() {
    try {
      const res = await fetch(API_URL)
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }
  
  async function getWarehouseById(warehouseId){
    try{
      const res = await fetch(`${API_URL}/${warehouseId}`)
      return res.json()
    }catch(error){
      console.log(error)
    }
  }
  
  async function addWarehouse(warehouseFormData) {
    try {
      const res = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(warehouseFormData),
      })
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }
  
  async function updateWarehouse(warehouseFormData) {
    try {
      const res = await fetch(`${API_URL}/${warehouseFormData.warehouseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(warehouseFormData),
      })
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }
  
  async function deleteWarehouse(warehouseId){
    try {
      const res = await fetch(`${API_URL}/${warehouseId}`, {
        method: 'DELETE',
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  
export {getAllWarehouses, getWarehouseById, addWarehouse, updateWarehouse, deleteWarehouse};