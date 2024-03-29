package com.milkStgo.acopioservice.controller;

import com.milkStgo.acopioservice.entity.Acopio;
import com.milkStgo.acopioservice.service.AcopioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@RestController
@RequestMapping("/acopio")
public class AcopioController {
    @Autowired
    AcopioService acopioService;

    // Create
    @PostMapping
    public ResponseEntity<Acopio> save(@RequestBody Acopio acopio){
        Acopio newAcopio = acopioService.save(acopio);
        return ResponseEntity.ok(newAcopio);    //
    }
    @PostMapping("/subir")
    public String addAcopio(@RequestParam("file") MultipartFile file){
        acopioService.guardar(file);
        acopioService.leerCsv("Acopio.csv");
        return "cargado";
    }
    // Read
    @GetMapping
    public ResponseEntity<List<Acopio>> getAll(){
        List<Acopio> acopios = acopioService.getAll();
        if(acopios.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(acopios);
    }
    @GetMapping("/{id}")
    public ResponseEntity<List<Acopio>> getAcopioPorProveedor(@PathVariable("id") String idProveedor){
        List<Acopio> acopios = acopioService.obtenerAcopiosPorProveedor(idProveedor);
        if(acopios.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(acopios);
    }

    // Delete
    @DeleteMapping
    public void deteleAcopios(){
        acopioService.eliminarAcopios();
    }
}
