package com.milkStgo.acopioservice.repository;

import com.milkStgo.acopioservice.entity.Acopio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcopioRepository extends JpaRepository<Acopio, Integer> {
    @Query("select a from Acopio a where a.id_proveedor = :proveedor")
    List<Acopio> obtenerAcopiosPorProveedor(@Param("proveedor") String proveedor);
    //List<Acopio> getAcopioById_proveedor(String id_proveedor);
}
