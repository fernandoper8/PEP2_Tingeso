 import React, { Component } from 'react';
import styled from 'styled-components';

export default class NavbarComponent extends Component {
    render(){
        return(
            <Header>
                <div id="izq">
                    <h1>milkStgo</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Menú</a></li>
                        <li><a href="/proveedores">Proveedores</a></li>
                        <li><a href="/archivos">Archivos</a></li>
                        <li><a href="/planilla">Planilla</a></li>
                    </ul>
                </nav>
            </Header>
        );
    }

}

const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 100;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 80px;
    background-color: #34adcb;

    &>#izq{
        margin-left: 20px;
        display: flex;
        flex-grow: 1;
    }
    &>nav{
        margin-right: 20px;
    }
    &>nav>ul{
        display: flex;
        flex-direction: row;

        gap: 20px;
        list-style: none;
    }
    &>nav>ul>li{
        display: flex;
        align-items: center;

        height: 60px;
        padding: 10px;
    }
    &>nav>ul>li>a{
        color: white;

        font-size: x-large;
        text-decoration: none;
    }
`