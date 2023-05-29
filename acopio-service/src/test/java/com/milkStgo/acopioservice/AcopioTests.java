package com.milkStgo.acopioservice;

import com.milkStgo.acopioservice.entity.Acopio;
import com.milkStgo.acopioservice.repository.AcopioRepository;
import com.milkStgo.acopioservice.service.AcopioService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AcopioTests {
    
    @Autowired
    AcopioRepository acopioRepository;
    @Autowired
    AcopioService acopioService;

    @Test
    void obtenerDataTest1(){
        int actual = acopioService.getAll().size();
        Acopio acopio = new Acopio();
        acopio.setId_proveedor("1020");
        acopio.setFecha("09-04-2023");
        acopio.setKls_leche("1000");
        acopio.setTurno("M");
        acopioRepository.save(acopio);

        List<Acopio> acopios = acopioService.getAll();
        assertEquals(actual+1, acopios.size());
        acopioRepository.deleteAll();
    }

    @Test
    void obtenerAcopiosPorProveedorTest1(){
        //acopioRepository.deleteAll();
        int actual = acopioService.getAll().size();
        Acopio acopio = new Acopio();
        acopio.setId_proveedor("1000");
        acopio.setFecha("09-04-2023");
        acopio.setKls_leche("1000");
        acopio.setTurno("M");
        acopioRepository.save(acopio);

        List<Acopio> acopios = acopioService.obtenerAcopiosPorProveedor("1000");
        List<Acopio> acopios2 = acopioService.obtenerAcopiosPorProveedor("1001");

        assertEquals(actual+1, acopios.size());
        assertEquals(0, acopios2.size());
        acopioRepository.deleteAll();
    }

    @Test
    void eliminarAcopiosTest1(){
        acopioRepository.deleteAll();
        Acopio acopio = new Acopio();
        acopio.setId_acopio(1000);
        acopio.setId_proveedor("1030");
        acopio.setFecha("09-04-2023");
        acopio.setKls_leche("1000");
        acopio.setTurno("M");
        acopioService.save(acopio);
        
        acopioService.eliminarAcopios();
        List<Acopio> acopios = acopioService.getAll();
        assertEquals(0, acopios.size());
    }

    @Test
    void guardarDataTest1(){
        int actual = acopioService.getAll().size();
        Acopio acopio = new Acopio();
        acopio.setId_proveedor("1040");
        acopio.setFecha("09-04-2023");
        acopio.setKls_leche("1000");
        acopio.setTurno("M");
        
        acopioService.save(acopio);

        List<Acopio> acopios = acopioService.getAll();
        assertEquals(actual+1, acopios.size());
        acopioRepository.deleteAll();
    }

    @Test
    void guardarDataDBTest1(){
        acopioRepository.deleteAll();
        acopioService.guardarDataDB("09-04-2023", "M", "1050", "1000");
        List<Acopio> acopios = acopioService.getAll();
        assertEquals(1, acopios.size());
        acopioRepository.deleteAll();
    }
}
