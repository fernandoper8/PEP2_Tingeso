package com.milkStgo.planillaservice.services;

import com.milkStgo.planillaservice.entity.Planilla;
import com.milkStgo.planillaservice.model.Acopio;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Service
public class PlanillaEntregasService {
    private static final int ENTREGA_AMBOS_TURNOS = 3;
    private static final int ENTREGA_SOLO_MANANA = 2;
    private static final int ENTREGA_SOLO_TARDE = 1;
    private static final int SI_ENTREGA = 1;
    private static final int NO_ENTREGA = 0;

    private Planilla planilla;
    private int totalKlsLecheEntregados = 0;
    private int turnoManana = 0;
    private int turnoTarde = 0;
    private int queTurnos= 0;

    public PlanillaEntregasService(Planilla planilla){
        this.planilla = planilla;
    }
    public void analizarAcopios(List<Acopio> acopiosProveedor){
        int cantidadEntregas = acopiosProveedor.size();

        for(Acopio acopio: acopiosProveedor){
            sumarLecheEntregada(acopio);
            analizarTurno(acopio);
        }
        queTurnosEntrega();
        setDatosPlanilla(cantidadEntregas);
    }
    public void sumarLecheEntregada(Acopio acopio){
        int lecheEntregadaEnAcopio = Integer.parseInt(acopio.getKls_leche());
        totalKlsLecheEntregados += lecheEntregadaEnAcopio;
    }
    public void analizarTurno(Acopio acopio){
        String turnoAcopio = acopio.getTurno();
        if(turnoAcopio.equals("M"))
            turnoManana = SI_ENTREGA;
        else if(turnoAcopio.equals("T"))
            turnoTarde = SI_ENTREGA;
    }
    public void queTurnosEntrega(){
        if(turnoManana == SI_ENTREGA && turnoTarde == SI_ENTREGA)
            queTurnos = ENTREGA_AMBOS_TURNOS;
        else if(turnoManana == SI_ENTREGA && turnoTarde == NO_ENTREGA)
            queTurnos = ENTREGA_SOLO_MANANA;
        else if(turnoManana == NO_ENTREGA && turnoTarde == SI_ENTREGA)
            queTurnos = ENTREGA_SOLO_TARDE;
        else
            queTurnos = NO_ENTREGA;
    }
    public void setDatosPlanilla(int cantidadEntregas){
        planilla.setTotalKlsLeche(totalKlsLecheEntregados);
        planilla.setQueTurnos(queTurnos);
        planilla.setFrecuencia(cantidadEntregas);
        setPromedioKlsEntregados(cantidadEntregas);
    }
    public void setPromedioKlsEntregados(int cantidadEntregas){
        float promedioKlsEntregados = 0;
        int totalKlsLeche = planilla.getTotalKlsLeche();

        if(cantidadEntregas != 0)
            promedioKlsEntregados = (float) totalKlsLeche / cantidadEntregas;
        planilla.setPromedioDiarioKls(promedioKlsEntregados);
    }
}
