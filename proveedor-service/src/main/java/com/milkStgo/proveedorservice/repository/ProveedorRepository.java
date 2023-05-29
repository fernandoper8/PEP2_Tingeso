package com.milkStgo.proveedorservice.repository;

import com.milkStgo.proveedorservice.entity.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProveedorRepository extends JpaRepository<Proveedor, String>{

}
