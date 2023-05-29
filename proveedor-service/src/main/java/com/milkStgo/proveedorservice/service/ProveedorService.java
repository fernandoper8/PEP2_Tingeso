package com.milkStgo.proveedorservice.service;

import com.milkStgo.proveedorservice.entity.Proveedor;
import com.milkStgo.proveedorservice.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProveedorService {
    @Autowired
    ProveedorRepository proveedorRepository;

    public Proveedor save(Proveedor proveedor){
        Proveedor newProveedor = proveedorRepository.save(proveedor);
        return newProveedor;
    }

    public void guardarProveedor(String nombre, String codigo, String retencion, String categoria){
        Proveedor proveedor = new Proveedor();
        proveedor.setNombre(nombre);
        proveedor.setCodigo(codigo);
        proveedor.setRetencion(retencion);
        proveedor.setCategoria(categoria);
        // Proveedor nuevo, no se registra una entrega de leche hasta que se carge un acopio
        proveedorRepository.save(proveedor);
    }

    public List<Proveedor> getAll(){
        return proveedorRepository.findAll();
    }

    public Proveedor getProveedorById(String id){
        return proveedorRepository.findById(id).orElse(null);
    }
}
