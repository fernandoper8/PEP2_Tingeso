package com.milkStgo.datosservice;

import com.milkStgo.datosservice.entity.Datos;
import com.milkStgo.datosservice.repository.DatosRepository;
import com.milkStgo.datosservice.service.DatosService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

@SpringBootTest
class DatosTests {

    @Autowired
    DatosRepository datosRepository;
    @Autowired
    DatosService datosService;

    @Test
    void obtenerDataTest1(){
        datosRepository.deleteAll();
        Datos dato = new Datos();
        dato.setId_proveedor("1020");
        dato.setPor_grasa(3);
        dato.setPor_solidos(4);
        datosRepository.save(dato);

        List<Datos> datos = datosService.getAll();
        assertEquals(1, datos.size());
        datosRepository.deleteAll();
    }

    @Test
    void eliminarDatosTest1(){
        datosRepository.deleteAll();
        Datos dato = new Datos();
        dato.setId_datos(1000);
        dato.setId_proveedor("1030");
        dato.setPor_grasa(3);
        dato.setPor_solidos(4);
        datosService.save(dato);
        
        datosService.eliminarDatos();
        List<Datos> datos = datosService.getAll();
        assertEquals(0, datos.size());
    }

    @Test
    void guardarDataTest1(){
        datosRepository.deleteAll();
        Datos dato = new Datos();
        dato.setId_proveedor("1030");
        dato.setPor_grasa(3);
        dato.setPor_solidos(4);
        datosService.save(dato);
        
        List<Datos> datos = datosService.getAll();
        assertEquals(1, datos.size());
        datosRepository.deleteAll();
    }

    @Test
    void guardarDataDBTest1(){
        datosRepository.deleteAll();
        datosService.guardarDataDB("1030", "3", "4");
        List<Datos> datos = datosService.getAll();
        assertEquals(1, datos.size());
        datosRepository.deleteAll();
    }

    @Test // Hay datas del proveedor 1030
    void obtenerDataPorProveedorTest1(){
        datosRepository.deleteAll();
        Datos dato = new Datos();
        dato.setId_proveedor("1030");
        dato.setPor_grasa(3);
        dato.setPor_solidos(4);
        datosService.save(dato);
        
        Datos datosResultado = datosService.obtenerDataPorProveedor("1030");
        assertEquals("1030", datosResultado.getId_proveedor());
        datosRepository.deleteAll();
    }

    @Test // No hay datas del proveedor 1030
    void obtenerDataPorProveedorTest2(){
        datosRepository.deleteAll();
        assertNull(datosService.obtenerDataPorProveedor("1030"));
        datosRepository.deleteAll();
    }
}
