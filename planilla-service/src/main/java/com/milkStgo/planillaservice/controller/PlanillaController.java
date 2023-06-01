package com.milkStgo.planillaservice.controller;

import com.milkStgo.planillaservice.entity.Planilla;
import com.milkStgo.planillaservice.model.Proveedor;
import com.milkStgo.planillaservice.services.PlanillaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/planilla")
public class PlanillaController {
    @Autowired
    PlanillaService planillaService;

    // Create
    /*@PostMapping
    public ResponseEntity<Planilla> save(@RequestBody Planilla planilla){
        Planilla newPlanilla = planillaService.save(planilla);
        return ResponseEntity.ok(newPlanilla);
    }*/
    @PostMapping
    public void crear(){
        planillaService.crearPlanilla();
    }
    // Read
    @GetMapping
    public ResponseEntity<List<Planilla>> getAll(){
        List<Planilla> planillas = planillaService.getAll();
        if (planillas.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(planillas);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Planilla> getById(@PathVariable("id") int id){
        Planilla planilla = planillaService.getById(id);
        if(planilla == null)
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(planilla);
    }

    // Para proveedores
    @GetMapping("/proveedor")
    public ResponseEntity<List<Proveedor>> getAllProveedores(){
        List<Proveedor> proveedores = planillaService.getAllProveedores();
        if(proveedores.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(proveedores);
    }


    // Para acopios

    // Para datos
}
