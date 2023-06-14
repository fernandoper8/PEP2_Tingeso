package com.milkStgo.datosservice.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
