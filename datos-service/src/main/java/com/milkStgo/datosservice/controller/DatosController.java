package com.milkStgo.datosservice.controller;

import com.milkStgo.datosservice.entity.Datos;
import com.milkStgo.datosservice.service.DatosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/datos")
public class DatosController {
    @Autowired
    DatosService datosService;

    // Create
    @PostMapping
    public ResponseEntity<Datos> save(@RequestBody Datos datos){
        Datos newDatos = datosService.save(datos);
        return ResponseEntity.ok(newDatos);
    }

    // Read
    @GetMapping
    public ResponseEntity<List<Datos>> getAll(){
        List<Datos> datos = datosService.getAll();
        if(datos.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(datos);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Datos> getById(@PathVariable("id") String idProveedor){
        Datos datos = datosService.obtenerDataPorProveedor(idProveedor);
        if(datos == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(datos);
    }

    // Delete
    @DeleteMapping
    public void deleteDatos(){
        datosService.eliminarDatos();
    }
}
