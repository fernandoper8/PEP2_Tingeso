package com.milkStgo.proveedorservice;

import com.milkStgo.proveedorservice.entity.Proveedor;
import com.milkStgo.proveedorservice.repository.ProveedorRepository;
import com.milkStgo.proveedorservice.service.ProveedorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ProveedorTests {

    @Autowired
    ProveedorRepository proveedorRepository;
    @Autowired
    ProveedorService proveedorService;

    @Test
    void guardarProveedorTest1(){
        int actual = proveedorService.getAll().size();
        proveedorService.guardarProveedor("Armin van Buuren", "2000", "Si", "A");
        assertEquals(actual+1, proveedorService.getAll().size());
        proveedorRepository.deleteAll();
    }

    @Test
    void obtenerProveedoresTest1(){
        List<Proveedor> proveedores = proveedorService.getAll();
        int actual = proveedores.size();
        proveedorService.guardarProveedor("Armin van Buuren", "2000", "Si", "A");
        assertEquals(actual+1, proveedorService.getAll().size());
        proveedorRepository.deleteAll();
    }
}