import React, { Component } from 'react';
import styled from 'styled-components';

export default class ProveedorComponent extends Component {
    render() {
        return (
            <Main>
                <Section>
                    <Formulario>
                        <h1>Ingresar nuevo Proveedor</h1>
                        <form>
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre del proveedor" required />

                            <label htmlFor="nombre">Codigo: </label>
                            <input type="text" name="codigo" id="codigo" placeholder="Codigo del proveedor" required />

                            <label htmlFor="Categoria">Categoria:</label>
                            <select name="Categoria" id="Categoria" required>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>

                            <label htmlFor="retencion">Retencion:</label>
                            <select name="retencion" id="retencion" required>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>

                            <button type="submit">Ingresar</button>
                        </form>
                    </Formulario>
                </Section>

                <Section>
                    <Listado>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Codigo</th>
                                    <th>Categoria</th>
                                    <th>Retencion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Armin van Buuren</td>
                                    <td>1001</td>
                                    <td>A</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Oliver Heldens</td>
                                    <td>2001</td>
                                    <td>A</td>
                                    <td>No</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Listado>
                </Section>
            </Main>
        );
    }
}

const Main = styled.main`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: auto;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
`

const Formulario = styled.div`
    background-color: #ebfcff;
    padding: 20px 50px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

    &>h1{
        text-align: center;
    }
    &>form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &>form>label, input, select{
        margin: 5px;
    }
    &>form>input, select{
        border-radius: 5px;
        width: 80%;
        height: 30px;
        border: 1px solid black;
        padding-left: 10px;
        font-size: large;
    }
    &>form>button{
        margin-top: 20px;
        background-color: #34adcb;
        color: white;
        width: 50%;
        height: 30px;
        border-radius: 5px;
        border: 1px solid black;
    }

`

const Listado = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;


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