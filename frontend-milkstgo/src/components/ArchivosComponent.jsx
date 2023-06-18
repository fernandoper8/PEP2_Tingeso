import React, { Component } from 'react';
import styled from 'styled-components';

export default class ArchivosComponent extends Component {
    render() {
        return (
            <Main>
                <SectionSup>
                    <SubidaArchivos>
                        <form>
                            <label htmlFor="acopios">Ingreso de Acopio.csv</label>
                            <input type="file" name="acopios" id="acopios" required />
                            <button type="submit">Subir Acopio</button>
                        </form>
                        <form>
                            <label htmlFor="datos">Ingreso de Datos.csv</label>
                            <input type="file" name="datos" id="datos" required />
                            <button type="submit">Subir Datos</button>
                        </form>
                    </SubidaArchivos>
                </SectionSup>
                <SectionInf>
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
                                    <tr>
                                        <td>1001</td>
                                        <td>11-05-2023</td>
                                        <td>M</td>
                                        <td>1000</td>
                                    </tr>
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
                                    <tr>
                                        <td>1001</td>
                                        <td>20</td>
                                        <td>30</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tablas>

                </SectionInf>
            </Main>
        );
    }
}

const Main = styled.main`
    display: flex;
    flex-direction: column;

    position: relative;
    height: 100%;
    width: 100%;
    overflow: auto;
`
const SectionSup = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
`
const SectionInf = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
`
const SubidaArchivos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    height: 30%;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    background-color: white;

    font-size: 1.5em;

    &>form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    &>form>label{
        font-size: 1.2em;
        font-weight: bold;
    }
    &>form>input{
        font-size: 1em;
        width: fit-content;
        height: 40px;
        border-radius: 5px;
    }
    &>form>button{
        margin-bottom: 10px;
        width: 200px;
        height: 40px;
        font-size: 0.7em;
        border-radius: 5px;
        border: 1px solid black;
        background-color: #34adcb;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    &>form>button:hover{
        background-color: #2b8ca6;
    }

`

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