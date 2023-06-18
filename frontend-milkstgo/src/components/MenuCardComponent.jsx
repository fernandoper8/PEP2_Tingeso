import React, { Component } from 'react';
import styled from 'styled-components';


export default class Card extends Component {

    render() {
        const {titulo, descripcion, link} = this.props;

        return (
            <CardBox>
                <h1>{titulo}</h1>
                <Sep />
                <p>{descripcion}</p>
                <Button><a href={link}>Acceder</a></Button>
            </CardBox>
        );
    }

}

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 550px;

    border-radius: 30px 30px 30px 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    
    margin: 15px 20px 15px 20px;

    background-color: white;

    &>p{
        width: 95%;
        text-align: center;

        font-size: 20px;
    }
`
const Sep = styled.div`
    width: 100%;
    border-top: 1px solid black;
`
const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #34adcb;
    color: white;

    font-size: 15px;
    margin-bottom: 10px;

    &>a{
        color: white;
        text-decoration: none;
    }
    &:hover{
        background-color: #27869E;
        color: white;
        cursor: pointer;
    }
`