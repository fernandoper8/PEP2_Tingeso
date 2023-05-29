package com.milkStgo.datosservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Datos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_datos;
    private String id_proveedor;
    private int por_grasa;
    private int por_solidos;

}
