import { Link } from "react-router-dom";
import WarehouseCard from "../../components/warehouseCard/WarehouseCard";
import styles from "./Warehouses.module.css";
import { useState,useEffect } from "react";

const Warehouses = ({warehouses}) => {
  const [sortedWarehouses, setSortedWarehouses] = useState([]);

  useEffect(() => {
    setSortedWarehouses([...warehouses]);
  }, [warehouses]);

  const handleSort = (evt) => {
    const {value} = evt.target
    if(value == "warehouseId"){
      setSortedWarehouses([...sortedWarehouses].sort((a,b) => a.warehouseId - b.warehouseId));
    }
    if(value == "warehouseName"){
      setSortedWarehouses([...sortedWarehouses].sort((a, b) => a.warehouseName.localeCompare(b.warehouseName)));
    }
    if(value == "capacity"){
      setSortedWarehouses([...sortedWarehouses].sort((a, b) => a.capacity - b.capacity));
    }
  }

  if (warehouses.length === 0)
    return (
      <main>
        <h2>
          There are no warehouses.
          <Link to="/warehouses/warehouse/add" className="linkTag">Add Warehouse</Link>
        </h2>
      </main>
    )

  return(
    <main className={styles.warehouseMain}>
      <div className="selectContainer">
      <Link to="/warehouses/warehouse/add" className="linkTag">Add Warehouse</Link>
          <select name="sort" id="sort" onChange={handleSort} className={styles.warehouseTable}>
            <option value="sortBy">Sort By:</option>
            <option value="warehouseId">ID</option>
            <option value="warehouseName">Name</option>
            <option value="capacity">Capacity</option>
          </select>
      </div>
      <table className={styles.warehouseTable}>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          <>
            {sortedWarehouses.map((warehouse) => (
              <WarehouseCard key={warehouse.warehouseId} warehouse={warehouse} />
            ))}
          </>   
        </tbody>
      </table>
    </main>
  )
}

export default Warehouses;