import React, { Component } from "react";
import styled from "styled-components";
import AcopioService from "../services/AcopioService";
import DatosService from "../services/DatosService";

export default class ArchivosVerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acopios: [],
            datos: []
        }
    }
    
    componentDidMount() {
        AcopioService.getAcopios().then((res1) => {
            this.setState({ acopios: res1.data });
        });


        DatosService.getDatos().then((res2) => {
            this.setState({ datos: res2.data });
        });


    }

    render() {
        return (
            <Tablas>
                <div id="acopios">
                    <Table>
                        <thead>
                            <tr>
                                <th>Proveedor</th>
                                <th>Fecha</th>
                                <th>Turno</th>
                                <th>KLS de Leche</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.acopios.map(
                                    acopio =>
                                        <tr key={acopio.id_acopio}>
                                            <td>{acopio.id_proveedor}</td>
                                            <td>{acopio.fecha}</td>
                                            <td>{acopio.turno}</td>
                                            <td>{acopio.kls_leche}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>

                <div id="datos">
                    <Table>
                        <thead>
                            <tr>
                                <th>Proveedor</th>
                                <th>Porcentaje Grasa</th>
                                <th>Porcentaje Solido Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.datos.map(
                                    dato =>
                                        <tr key={dato.id_datos}>
                                            <td>{dato.id_proveedor}</td>
                                            <td>{dato.por_grasa}</td>
                                            <td>{dato.por_solidos}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </Tablas>
        );
    }
}

const Tablas = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`

const Table = styled.table`
    border-collapse: collapse;
    margin: 120px 0px;
    font-size: 1.2em;
    min-width: 400px;
    border-radius: 15px 15px 15px 15px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

    &>thead>tr{
        background-color: #34adcb;
        color: white;
        text-align: center;
        font-weight: bold;
    }
    &>thead>tr>th:first-child{
        min-width: 200px;
    }
    &>thead>tr>th:nth-child(2){
        min-width: 100px;
    }
    &>thead>tr>th:nth-child(3){
        min-width: 100px;
    }
    &>thead>tr>th:nth-child(4){
        min-width: 100px;
    }
    &>tr, th{
        padding: 12px 15px;
    }
    &>tbody>tr{
        border-bottom: 1px solid #dddddd;
        text-align: center;
        height: 50px;
    }
    &>tbody>tr:nth-of-type(even){
        background-color: #ebfcff;
    }
    &>tbody>tr:nth-of-type(odd){
        background-color: #ffffff;
    }
`