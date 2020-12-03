import React, { useState, useEffect } from 'react';
import { Container, Nav_Header, Menu_InfoHistorico, Informacoes_Tabela } from './styles';
import Header from '../../components/Header'
import Tabela from '../../components/Tabela_De_Historico'
import InfoHistorico from '../../components/InfoHistorico'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Perfil_Historico() {
        //Verificando Se o usuario esta autorizado para acessar essa pagina
        const history = useHistory()
    
        useEffect(() => {
            
    
            axios.get('http://localhost:3000/v1/teste', {
                method: 'GET',
                headers:  {'X-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA3MDMyNzEyLCJleHAiOjE2MDcwMzMwMTJ9.9AR7MM57F3d7ATO_0zifm0BRYSXgCBh2cVFzgFMJNd4'}         
            }).then((res) => {
    
                if(res.data[0].auth)
                {
                    console.log('Voce tem acesso')
                }
                else
                {
                    history.push("/")
                }
    
            }).catch (() => {history.push("/")})
        }, [])
        //**Verificando Se o usuario esta autorizado para acessar essa pagina**
    return (
        <Container>
            <Nav_Header>
                <Header />
            </Nav_Header>

            <Menu_InfoHistorico>
                <InfoHistorico />
            </Menu_InfoHistorico>
            
            <Informacoes_Tabela>
                <Tabela />
            </Informacoes_Tabela>
        </Container>
    );
}

export default Perfil_Historico;