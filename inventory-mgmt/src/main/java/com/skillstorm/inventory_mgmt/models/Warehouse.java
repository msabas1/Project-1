package com.skillstorm.inventory_mgmt.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Entity
@Table(name = "warehouses")
public class Warehouse {

    @Id
    private int warehouseId;

    @Min(value = 0)
    @Max(value = 250)
    private int capacity;

    @ManyToMany(mappedBy = "warehouses")
    List<Product> products;

    public Warehouse() {
    }

    public Warehouse(int warehouseId, @Min(0) @Max(250) int capacity) {
        this.warehouseId = warehouseId;
        this.capacity = capacity;
    }

    public int getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(int warehouseId) {
        this.warehouseId = warehouseId;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
