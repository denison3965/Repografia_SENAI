import React from 'react';
import { Container } from './styles';

function formulario() {
  return (
    <Container>
        <form className="form_esquerda">
            <div className="inf_solicitacao"></div>
            <div className="inf_requisicao"></div>
        </form>

        <form className="form_direita">
            <div className="div_dropdown">
                <select className="dropdown">
                    <option selected value="Indefinido">Área de Atuação</option>
                    <option value="Indefinido">CT</option>
                    <option value="Indefinido">CAI</option>
                    <option value="Indefinido">PC</option>
                    <option value="Indefinido">CST</option>
                    <option value="Indefinido">Pós Graduação</option>
                </select>
                <select className="dropdown">
                    <option selected value="Indefinido">CC</option>
                    <option value="Indefinido">45220</option>
                    <option value="Indefinido">2014251</option>
                </select>                
            </div>

            <div className="acabamento"></div> 

            <div className="div_assinatura">
                <p className="assinatura">Assinatura ______________________________</p>
            </div>
        </form>
    </Container>
  );
}

export default formulario;