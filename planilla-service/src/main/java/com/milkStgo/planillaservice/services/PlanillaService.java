package com.milkStgo.planillaservice.services;

import com.milkStgo.planillaservice.entity.Planilla;
import com.milkStgo.planillaservice.model.Datos;
import com.milkStgo.planillaservice.model.Acopio;
import com.milkStgo.planillaservice.model.Proveedor;
import com.milkStgo.planillaservice.repository.PlanillaRepository;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Service
public class PlanillaService {
    private static final int PLANILLA_ANTERIOR = 0;
    private Planilla planilla;
    @Autowired
    PlanillaRepository planillaRepository;

    @Autowired
    RestTemplate restTemplate;
    @Autowired
    PlanillaDescuentosService planillaDescuentosService;
    @Autowired
    PlanillaEntregasService planillaEntregasService;
    @Autowired
    PlanillaPorcentajesService planillaPorcentajesService;
    @Autowired
    PlanillaPagosService planillaPagosService;

    public PlanillaService(){
        this.planilla = new Planilla();
    }
    public Planilla save(Planilla planilla){
        Planilla newPlanilla = planillaRepository.save(planilla);
        return newPlanilla;
    }
    public List<Planilla> getAll(){
        return planillaRepository.findAll();
    }

    public Planilla getById(int id){
        return planillaRepository.findById(id).orElse(null);
    }



    // Hacer los metodos get para traer proveedores, acopios (por proveedor) y datos (por proveedor) :)
    // Para proveedores
    public List<Proveedor> getAllProveedores(){
        List<Proveedor> proveedores = restTemplate.exchange("http://proveedor-service/proveedor", HttpMethod.GET,
                null, new ParameterizedTypeReference<List<Proveedor>>() {})
                .getBody();
        System.out.println("LOCURA: " + proveedores);
        return proveedores;
    }
    // Para acopios
    public List<Acopio> getAcopiosPorIdProveedor(String idProveedor){
        List<Acopio> acopios = restTemplate.exchange("http://acopio-service/acopio/" + idProveedor, HttpMethod.GET,
                null, new ParameterizedTypeReference<List<Acopio>>(){})
                .getBody();
        return acopios;
    }
    public void eliminarAcopios(){
        //restTemplate.delete("http://acopio-service/acopio");
        restTemplate.exchange("http://acopio-service/acopio", HttpMethod.DELETE, null, String.class);
    }
    // Para datos
    public Datos getDatosPorIdProveedor(String idProveedor){
        Datos datos = restTemplate.getForObject("http://datos-service/datos/" + idProveedor, Datos.class);
        return datos;
    }
    public void eliminarDatos(){
        //restTemplate.delete("http://datos-service/datos");
        restTemplate.exchange("http://datos-service/datos", HttpMethod.DELETE, null, String.class);
    }

    @Generated
    public void crearPlanilla(){
        List<Proveedor> proveedoresExistentes;
        List<Acopio> acopiosProveedor;
        Datos datosProveedor;

        //proveedoresExistentes = proveedorService.obtenerProveedores(); // Peticion http para obtener todos los proveedores a proveedor-service
        proveedoresExistentes = getAllProveedores();
        for(Proveedor proveedor: proveedoresExistentes){
            String codigoProveedor = proveedor.getCodigo();

            //acopiosProveedor = acopioService.obtenerAcopiosPorProveedor(codigoProveedor); // Peticion para obtener acopios por id de proveedor a acopio-service
            acopiosProveedor = getAcopiosPorIdProveedor(codigoProveedor);
            if(tieneAcopios(acopiosProveedor)) {
                //datosProveedor = datosService.obtenerDataPorProveedor(codigoProveedor); // Peticion para obtener data por id de proveedor a datos-service
                datosProveedor = getDatosPorIdProveedor(codigoProveedor);
                crearPagoPorProveedor(proveedor, acopiosProveedor, datosProveedor);
            }
            reiniciarPlanilla();
        }
        //acopioService.eliminarAcopios();
        eliminarAcopios();
        eliminarDatos();

    }

    public boolean tieneAcopios(List<Acopio> acopios){
        return (!acopios.isEmpty());
    }

    @Generated
    public void crearPagoPorProveedor(Proveedor proveedor, List<Acopio> acopios, Datos datos){
        String codigoProveedor = proveedor.getCodigo();
        Planilla planillaAnterior = obtenerPlanillaAnteriorProveedor(codigoProveedor);
        setInfoProveedor(proveedor);
        setInfoEntregas(acopios);
        setInfoPorcentajes(datos);
        setInfoPagos();
        setInfoRestante();
        guardarPlanilla(this.planilla);
        actualizarPlanillaAnterior(planillaAnterior);
    }
    public void guardarPlanilla(Planilla planillaNueva){
        planillaRepository.save(planillaNueva);
    }
    public void actualizarPlanillaAnterior(Planilla planillaAnterior){
        if(esLaPlanillaAnterior(planillaAnterior)) {
            planillaAnterior.setComparado(-1);
            guardarPlanilla(planillaAnterior);
        }
    }
    public void setInfoRestante(){
        int valorNoComparado = 0;
        Date fechaActual = new Date();

        planilla.setComparado(valorNoComparado);
        planilla.setFecha(fechaActual);
    }
    @Generated
    public void setInfoPagos(){
        Planilla planillaAnterior = obtenerPlanillaAnteriorProveedor(this.planilla.getCodigo());
        planillaPagosService = new PlanillaPagosService(planilla, planillaAnterior);
        planillaPagosService.analizarPagos();
        actualizarPlanilla(planillaPagosService.getPlanilla());
    }
    @Generated
    public void setInfoPorcentajes(Datos datosProveedor){
        Planilla planillaAnterior = obtenerPlanillaAnteriorProveedor(this.planilla.getCodigo());
        planillaPorcentajesService = new PlanillaPorcentajesService(this.planilla, planillaAnterior, datosProveedor);
        planillaPorcentajesService.analizarDatos();
        actualizarPlanilla(planillaPorcentajesService.getPlanilla());
    }
    @Generated
    public void setInfoEntregas(List<Acopio> acopiosProveedor){
        planillaEntregasService = new PlanillaEntregasService(this.planilla);
        planillaEntregasService.analizarAcopios(acopiosProveedor);
        actualizarPlanilla(planillaEntregasService.getPlanilla());
    }
    public void setInfoProveedor(Proveedor proveedor){
        planilla.setNombre(proveedor.getNombre());
        planilla.setCodigo(proveedor.getCodigo());
        planilla.setCategoria(proveedor.getCategoria());
    }
    public void reiniciarPlanilla(){
        this.planilla = new Planilla();
    }
    public void actualizarPlanilla(Planilla planillaActualizada){
        this.planilla = planillaActualizada;
    }

    public List<Planilla> obtenerPlanillas(){
        return (List<Planilla>) planillaRepository.findAll();
    }
    public Planilla obtenerPlanillaAnteriorProveedor(String codigoProveedor){
        List<Planilla> planillaAnteriorTemp = planillaRepository.obtenerPlanillaAnteriorProveedor(codigoProveedor);
        Planilla planillaAnterior;
        if(planillaAnteriorTemp.size() == 0) { // No hay planillas anteriores para el proveedor
            planillaAnterior = new Planilla();
            planillaAnterior.setComparado(-1); // Se crea una vacia, con el indicador de que no tiene pagos anteriores
        }else{
            planillaAnterior = planillaAnteriorTemp.get(0); // Se obtiene la planilla anterior. Tiene el indicador de que
        }                                                  // corresponde a la planilla anterior del proveedor
        return planillaAnterior;
    }
    public boolean esLaPlanillaAnterior(Planilla planilla){
        return (planilla.getComparado() == PLANILLA_ANTERIOR);
    }

}
