package com.milkStgo.planillaservice.repository;

import com.milkStgo.planillaservice.entity.Planilla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanillaRepository extends JpaRepository<Planilla, Integer> {

}
