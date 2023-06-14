package com.milkStgo.proveedorservice.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Proveedor {
    @NonNull
    @Id
    private String codigo;
    private String nombre;
    private String categoria;
    private String retencion;
}
