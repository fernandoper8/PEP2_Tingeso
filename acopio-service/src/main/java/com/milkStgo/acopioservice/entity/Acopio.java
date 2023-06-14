package com.milkStgo.acopioservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Acopio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_acopio;
    private String id_proveedor;
    private String fecha;
    private String kls_leche;
    private String turno;
}
