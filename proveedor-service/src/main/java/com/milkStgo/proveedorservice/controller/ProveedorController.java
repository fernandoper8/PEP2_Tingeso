package com.milkStgo.proveedorservice.controller;

import com.milkStgo.proveedorservice.entity.Proveedor;
import com.milkStgo.proveedorservice.service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proveedor")
public class ProveedorController {
    @Autowired
    ProveedorService proveedorService;

    // Create
    @PostMapping
    public ResponseEntity<Proveedor> save(@RequestBody Proveedor proveedor){
        Proveedor newProveedor = proveedorService.save(proveedor);
        return ResponseEntity.ok(newProveedor);
    }
    // Read
    @GetMapping
    public ResponseEntity<List<Proveedor>> getAll(){
        List<Proveedor> proveedores = proveedorService.getAll();
        System.out.println(proveedores);
        if(proveedores.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(proveedores);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> getById(@PathVariable("id") String id){
        Proveedor proveedor = proveedorService.getProveedorById(id);
        if(proveedor == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(proveedor);
    }

}
