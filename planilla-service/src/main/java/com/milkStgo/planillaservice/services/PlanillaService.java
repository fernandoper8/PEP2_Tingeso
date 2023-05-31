package com.milkStgo.planillaservice.services;

import com.milkStgo.planillaservice.entity.Planilla;
import com.milkStgo.planillaservice.repository.PlanillaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanillaService {

    @Autowired
    PlanillaRepository planillaRepository;

    public Planilla save(Planilla planilla){
        Planilla newPlanilla = planillaRepository.save(planilla);
        return newPlanilla;
    }
    public List<Planilla> getAll(){
        return planillaRepository.findAll();
    }

    // Hacer los metodos get para traer proveedores, acopios (por proveedor) y datos (por proveedor) :)

}
