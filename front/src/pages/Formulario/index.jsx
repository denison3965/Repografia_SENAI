import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import  Button  from '../../components/Button'
import IconCloud from '../../assets/img/iconcloud.png'

function formulario() {
  return (
    <Container>
        <Header/>
        <div className="div_pai--button">
            <div onClick="Voltar" className="sair--button"><p>Voltar</p></div>
        </div>
            

        <form className="form_esquerda">

            <div className="inf_solicitacao">
                <div className="div_titulo_form"><p className="titulo_form">Informações da solicitação</p></div>

                <div className="div1_informacao">
                    <p className="p_esquerdo">Nome do Solicitante:</p> 
                    <p className="p_direito">resposta</p>
                    <p className="p_esquerdo">Escola solicitante:</p> 
                    <p className="p_direito">resposta</p>
                    <p className="p_esquerdo">Telefone:</p> 
                    <p className="p_direito">resposta</p>
                    <p className="p_esquerdo">Data de solicitação:</p> 
                    <p className="p_direito">resposta</p>
                    <p className="p_esquerdo">Data esperada para a entrega:</p> 
                    <p className="p_direito">resposta</p>
                    <p className="p_esquerdo">Número:</p> 
                    <p className="p_direito">resposta</p>
                </div>
            </div>

            <div className="inf_requisicao">
            <div className="div_titulo_form"><p className="titulo_form">Informações da requisição</p></div>
            </div>

        </form>

        <form className="form_direita">
            <div className="div_dropdown_form_direita">
                <select className="dropdown_form_direita">
                    <option selected value="Indefinido">Área de Atuação</option>
                    <option value="Indefinido">CT</option>
                    <option value="Indefinido">CAI</option>
                    <option value="Indefinido">PC</option>
                    <option value="Indefinido">CST</option>
                    <option value="Indefinido">Pós Graduação</option>
                </select>
                <select className="dropdown_form_direita">
                    <option selected value="Indefinido">CC</option>
                    <option value="Indefinido">45220</option>
                    <option value="Indefinido">2014251</option>
                </select>                
            </div>

            <div className="acabamento">
            <div className="div_titulo_form"><p className="titulo_form">Acabamento</p></div>
            </div> 

            <div className="div_assinatura">
                <p className="assinatura">Assinatura ______________________________</p>
            </div>

               

        </form>

        <form className="form_baixo">

            <select className="dropdown_form_baixo">
                <option selected value="Indefinido">Coordenador</option>
                <option value="Indefinido"> Sandra Sobrenome</option>
                <option value="Indefinido"> Alexandre Sobrenome</option>
                <option value="Indefinido"> Fulano Sobrenome</option>
                <option value="Indefinido"> Ciclano Sobrenome</option>
            </select>

            <h5 className='tittle_upload'>Upload do exemplar:</h5>

            <div className="div_upload">
                <img className="img_cloud" src={IconCloud} alt=""/>
                <p className="text_upload">Arraste e solte um arquivo aqui <br/> ou</p>
                <input type="file" multiple="multiple" className="cursor-pointer input_exemplar" id="attachment" name="attachment"/>
            </div>

            {<Button fontStyle="italic" fontSize="1.8vw" title="Enviar" width="15vw"/>}

        </form>
        

    </Container>
  );
}

export default formulario;