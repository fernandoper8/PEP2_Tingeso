import React, { Component } from 'react';
import styled from 'styled-components';
import AcopioService from '../services/AcopioService';
import DatosService from '../services/DatosService';

export default class ArchivosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acopioFile: null,
            datosFile: null
        }
    }

    onAcopioFileChange = (e) => {
        this.setState({ acopioFile: e.target.files[0] });
    }
    onDatosFileChange = (e) => {
        this.setState({ datosFile: e.target.files[0] });
    }

    // subir archivos de los inputs
    subirAcopio = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', this.state.acopioFile);
        AcopioService.subirAcopio(formData).then(res => {
            this.setState({ acopios: res.data });
        });
        alert("Acopio subido correctamente")
        window.location.reload();
    }

    subirDatos = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', this.state.datosFile);
        DatosService.subirDatos(formData).then(res => {
            this.setState({ datos: res.data });
        });
        alert("Datos subidos correctamente")
        window.location.reload();
    }

    render() {
        return (
            <Main>
                <SectionSup>
                    <SubidaArchivos>
                        <form>
                            <label htmlFor="acopios">Ingreso de Acopio.csv</label>
                            <input type="file" name="acopios" id="acopios" onChange={this.onAcopioFileChange} required />
                            <button type="submit" onClick={this.subirAcopio}>Subir Acopio</button>
                        </form>
                        <form>
                            <label htmlFor="datos">Ingreso de Datos.csv</label>
                            <input type="file" name="datos" id="datos" onChange={this.onDatosFileChange} required />
                            <button type="submit" onClick={this.subirDatos}>Subir Datos</button>
                        </form>
                    </SubidaArchivos>
                </SectionSup>
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

