import React from 'react'
import { ContadorComponent } from './components/ContadorComponent'
import { FormularioComponent } from './components/FormularioComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsuariosComponent } from './components/UsuariosComponent';

export const HooksApp = () => {
    return (
        <>
            <h1>Hooks y Bootstrap</h1>
            <hr /> 
            <ContadorComponent></ContadorComponent>
            <FormularioComponent></FormularioComponent>
            <hr /> 
            <UsuariosComponent></UsuariosComponent>
        </>
    )
}
//observaciones:
//1- hr hace una linea que separa