import React, { Component } from 'react';
import styled from 'styled-components';
import ProveedorService from '../services/ProveedorService';
import ProveedorCrearComponent from './ProveedoresCrearComponent';

export default class ProveedorComponent extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            proveedores: []
        }

    }

    // Se ejecuta cuando el componente se 'monta' en la interfaz
    componentDidMount(){
        ProveedorService.getProveedores().then((res) => {
            this.setState({proveedores: res.data});
            
        });
    }

    render() {
        return (
            <Main>
                <Section>
                    <ProveedorCrearComponent />
                </Section>

                <Section id="lista">
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
                                {
                                    this.state.proveedores.map(
                                        proveedor =>
                                        <tr key = {proveedor.codigo}>
                                            <td>{proveedor.nombre}</td>
                                            <td>{proveedor.codigo}</td>
                                            <td>{proveedor.categoria}</td>
                                            <td>{proveedor.retencion}</td>
                                        </tr>
                                    )
                                }
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