import React from 'react';
import { Container, Nav_Header, Menu_InfoHistorico, Informacoes_Tabela } from './styles';
import Header from '../../components/Header'
import Tabela from '../../components/Tabela_De_Historico'
import InfoHistorico from '../../components/InfoHistorico'

function Perfil_Historico() {
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