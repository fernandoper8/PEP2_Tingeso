import React, { Component } from 'react';
import styled from 'styled-components';

export default class PlanillaComponent extends Component {
    render() {
        return (
            <Card>
                <ProveedorInfo>
                    <ProveedorInfoCard>
                        <Nombre>
                            <h1>Armin van Buuren</h1>    
                        </Nombre>
                        <h2>Codigo</h2>
                        <h3>Fecha del pago</h3>
                    </ProveedorInfoCard>
                </ProveedorInfo>

                <EntregaInfo>
                    <Table>
                        <thead>
                            <tr>
                                <th>KG de Leche</th>
                                <th>Frecuencia de Entregas</th>
                                <th>Promedio Diario de KG</th>
                                <th>Bonificacion por Frecuiencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>200</td>
                                <td>4</td>
                                <td>50</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                </EntregaInfo>

                <PorcentajesInfo>
                    <Table>
                        <thead>
                            <tr>
                                <th>% Var. Leche</th>
                                <th>Descuento var. Leche</th>
                                <th>% Grasa</th>
                                <th>Descuento var. Grasa</th>
                                <th>% ST</th>
                                <th>Descuento var. ST</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>35</td>
                                <td>0</td>
                                <td>8</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </Table>
                </PorcentajesInfo>

                <PagosInfo>
                    <Table>
                        <thead>
                            <tr>
                                <th>Monto Retenido</th>
                                <th>Pago Total</th>
                                <th>Pago Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>200000</td>
                                <td>200000</td>
                            </tr>
                        </tbody>
                    </Table>
                </PagosInfo>

            </Card>
        );
    }
}

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px;

    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 40px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    margin-top: 100px;
    width: 80%;

`
const ProveedorInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    grid-column: 1/2;

    height: 250px;
`

const ProveedorInfoCard = styled.div`
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    border-radius: 35px;
    overflow: hidden;
    width: 500px;
    background-color: white;
`
const Nombre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #34adcb;;
    height: 100px;
`

const EntregaInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    text-align: center;
    grid-column: 2/3;
    height: 250px;

    &>Table>thead>tr>th:first-child{
        width: 100px;
    }
    &>Table>thead>tr>th:nth-child(2){
        width: 150px;
    }
    &>Table>thead>tr>th:nth-child(3){
        width: 150px;
    }
    &>Table>thead>tr>th:nth-child(4){
        width: 150px;
    }
`

const PorcentajesInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    text-align: center;
    grid-column: 1/2;
    grid-row: 2/3;
    height: 250px;

    &>Table>thead>tr>th:first-child{
        width: 50px;
    }
    &>Table>thead>tr>th:nth-child(2){
        width: 50px;
    }
    &>Table>thead>tr>th:nth-child(3){
        width: 50px;
    }
    &>Table>thead>tr>th:nth-child(4){
        width: 50px;
    }
    &>Table>thead>tr>th:nth-child(5){
        width: 50px;
    }
    &>Table>thead>tr>th:nth-child(6){
        width: 50px;
    }
`

const PagosInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    text-align: center;
    grid-column: 2/3;
    grid-row: 2/3;
    height: 250px;
`

const Table = styled.table`
    position: absolute;
    border-collapse: collapse;
    margin: 25px 0px;
    font-size: 1.2em;
    min-width: 400px;
    border-radius: 15px 15px 15px 15px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    &>thead>tr{
        background-color: #34adcb;
        color: white;
        text-align: center;
        font-weight: bold;
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