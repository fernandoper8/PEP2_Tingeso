package com.milkStgo.planillaservice.repository;

import com.milkStgo.planillaservice.entity.Planilla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PlanillaRepository extends JpaRepository<Planilla, Integer> {
    @Query("select p from Planilla p where p.codigo = :codigo")
    ArrayList<Planilla> obtenerPlanillasPorProveedor(@Param("codigo") String codigo);

    @Query("select p from Planilla p where p.codigo = :codigo and p.comparado = 0")
    ArrayList<Planilla> obtenerPlanillaAnteriorProveedor(@Param("codigo") String codigo);
}
