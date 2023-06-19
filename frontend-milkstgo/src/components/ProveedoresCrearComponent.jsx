import React, { Component } from 'react';
import styled from 'styled-components';
import ProveedorService from '../services/ProveedorService';

export default class ProveedorCrearComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            codigo: '',
            categoria: '',
            retencion: ''
        }
        this.changeCategoriaHandler = this.changeCategoriaHandler.bind(this);
        this.changeCodigoHandler = this.changeCodigoHandler.bind(this);
        this.changeNombreHandler = this.changeNombreHandler.bind(this);
        this.changeRetencionHandler = this.changeRetencionHandler.bind(this);
        this.saveProveedor = this.saveProveedor.bind(this);
    }

    saveProveedor = (e) => {
        e.preventDefault()
        let proveedor= {nombre: this.state.nombre, 
                        codigo: this.state.codigo, 
                        categoria: this.state.categoria, 
                        retencion: this.state.retencion
                    }
        ProveedorService.createProveedor(proveedor).then(res => {
            window.location.reload();
        });
    }

    changeNombreHandler = (event) => {
        this.setState({nombre: event.target.value})
    }
    changeCodigoHandler = (event) => {
        this.setState({codigo: event.target.value})
    }
    changeCategoriaHandler = (event) => {
        this.setState({categoria: event.target.value})
    }
    changeRetencionHandler = (event) => {
        this.setState({retencion: event.target.value})
    }

    render() {
        return (
            <Formulario>
                <h1>Ingresar nuevo Proveedor</h1>
                <form>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre del proveedor" 
                        value={this.state.nombre} onChange={this.changeNombreHandler} required />
                    <label htmlFor="nombre">Codigo: </label>
                    <input type="text" name="codigo" id="codigo" placeholder="Codigo del proveedor"
                        value={this.state.codigo} onChange={this.changeCodigoHandler} required />

                    <label htmlFor="Categoria">Categoria:</label>
                    <select name="Categoria" id="Categoria" value={this.state.categoria} onChange={this.changeCategoriaHandler} required>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>

                    <label htmlFor="retencion">Retencion:</label>
                    <select name="retencion" id="retencion" value={this.state.retencion} onChange={this.changeRetencionHandler} required>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>

                    <button type="submit" onClick={this.saveProveedor}>Ingresar Proveedor</button>
                </form>
            </Formulario>
        );
    }

}

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