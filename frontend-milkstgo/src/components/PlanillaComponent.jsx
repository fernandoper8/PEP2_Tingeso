import React, { Component } from 'react';
import PlanillaCardComponent from './PlanillaCardComponent';
import styled from 'styled-components';
import AcopioService from '../services/AcopioService';
import DatosService from '../services/DatosService';
import PlanillaService from '../services/PlanillaService';

export default class PlanillaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acopios: [],
            datos: [],
            planillas: []
        }
    }

    crearPlanilla = (e) => {
        e.preventDefault()
        PlanillaService.crearPlanilla().then(res => {
            window.location.reload();
        });
    }

    componentDidMount() {
        AcopioService.getAcopios().then((res) => {
            this.setState({ acopios: res.data });
        });
        DatosService.getDatos().then((res) => {
            this.setState({ datos: res.data });
        });
        PlanillaService.getPlanillas().then((res) => {
            this.setState({ planillas: res.data });
        });
    }

    render() {
        return (
            <Main>
                <CrearPlanilla>
                    <h3>Recuerda ingresar los archivos de Acopio y Datos Nutricionales antes</h3>
                    {this.state.acopios.length > 0 && this.state.datos.length > 0 && (
                        <button onClick={this.crearPlanilla}>Generar Nueva Planilla</button>
                    )}
                </CrearPlanilla>
                {this.state.planillas.length > 0 &&
                    this.state.planillas.map(planilla => (
                        <PlanillaCardComponent key={planilla.id_planilla} planilla={planilla} />
                    ))}
            </Main>
        );
    }
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CrearPlanilla = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 100px;

    &>button{
        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background-color: #1E90FF;
        color: white;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
    }
    &>button:hover{
        background-color: #1E90FF;
        opacity: 0.8;
    }
`