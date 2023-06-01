package com.milkStgo.planillaservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Datos {
    private int id_datos;
    private String id_proveedor;
    private int por_grasa;
    private int por_solidos;
}
