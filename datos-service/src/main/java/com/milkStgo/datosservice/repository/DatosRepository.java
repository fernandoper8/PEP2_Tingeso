package com.milkStgo.datosservice.repository;

import com.milkStgo.datosservice.entity.Datos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DatosRepository extends JpaRepository<Datos, Integer> {
    @Query("select d from Datos d where d.id_proveedor = :codigo")
    List<Datos> obtenerDatosPorProveedor(@Param("codigo") String codigo);
}