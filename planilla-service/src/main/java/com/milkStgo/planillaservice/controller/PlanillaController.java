package com.milkStgo.planillaservice.controller;

import com.milkStgo.planillaservice.entity.Planilla;
import com.milkStgo.planillaservice.services.PlanillaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/planilla")
public class PlanillaController {
    @Autowired
    PlanillaService planillaService;

    // Create
    @PostMapping
    public ResponseEntity<Planilla> save(@RequestBody Planilla planilla){
        Planilla newPlanilla = planillaService.save(planilla);
        return ResponseEntity.ok(newPlanilla);
    }

    // Read
    @GetMapping
    public ResponseEntity<List<Planilla>> getAll(){
        List<Planilla> planillas = planillaService.getAll();
        if (planillas.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(planillas);
    }
}
