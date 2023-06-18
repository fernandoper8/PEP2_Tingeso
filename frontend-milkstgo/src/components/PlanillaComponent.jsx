import React, { Component } from 'react';
import PlanillaCardComponent from './PlanillaCardComponent';
import styled from 'styled-components';

export default class PlanillaComponent extends Component{
    render(){
        return(
            <Main>
                <PlanillaCardComponent/>
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

const Pagos = styled.div`
    background-color: #f2f2f2;

    margin-top: 100px;
    width: 80%;

    border-radius: 10px;
`