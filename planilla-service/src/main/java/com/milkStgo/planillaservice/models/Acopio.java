package com.milkStgo.planillaservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Acopio {
    private int id_acopio;
    private String id_proveedor;
    private String fecha;
    private String kls_leche;
    private String turno;
}
