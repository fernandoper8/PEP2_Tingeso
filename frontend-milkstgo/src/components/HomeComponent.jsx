import React, { Component } from 'react';
import Card from './MenuCardComponent';
import styled from 'styled-components';

export default class HomeComponent extends Component{
    render(){
        return(
            <Main>
                <h1>Menú principal</h1>
                <Sup>
                    <Card titulo="Proveedores" descripcion="Revisa y añade nuevos proveedores" link="/proveedores"/>
                    <Card titulo="Archivos" descripcion="Sube los archivos de acopio y datos nutricionales" link="/archivos"/>
                </Sup>
                <Inf>
                    <Card titulo="Planillas y Pagos" descripcion="Genera la planilla de pagos una vez registrados los datos necesarios" link="/planilla"/>
                </Inf>
            </Main>
        );
    }
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 100px;

    &>h1{
        margin-top: 20px;
        text-align: center;
    }
`

const Sup = styled.div`
    display: flex;
    flex-direction: row;
`
const Inf = styled.div`
`
