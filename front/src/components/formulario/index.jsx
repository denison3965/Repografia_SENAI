import React from 'react';
import { Container } from './styles';
import Header from '../Header';

function formulario() {
  return (
    <Container>
        <Header/>
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
        
        <form className="form_baixo">
            <h5 className='tittle_upload'>Upload do exemplar:</h5>
            <div className="div_upload">
                
                <p className="text_upload">Arraste e solte um arquivo aqui <br/> ou</p>
                <input type="file" className="cursor-pointer input_exemplar" id="attachment" name="attachment"/>

            </div>
        </form>
        

    </Container>
  );
}

export default formulario;