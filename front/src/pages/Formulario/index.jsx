import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import  Button  from '../../components/Button'
import IconCloud from '../../assets/img/iconcloud.png'

function formulario() {
  return (
    <Container>
        <Header/>
        <h3 className="titulo_do_formulario">Solicitação de Serviços Reprográficos</h3>
        <div className="div_pai--button">
            <div onClick="Voltar" className="sair--button"><p>Voltar</p></div>
        </div>
            

        <form className="form_esquerda">

            <div className="inf_solicitacao">
                <div className="div_titulo_form"><p className="titulo_form">Informações da solicitação</p></div>

                <div className="div1_informacao">
                    <div className="div1_p">
                        <p>Nome do Solicitante:</p> 
                        <p className="p_resposta">resposta</p>
                    </div>
                    <div className="div1_p">
                        <p>Escola solicitante:</p> 
                        <p className="p_resposta">resposta</p>
                    </div>
                    <div className="div1_p">
                        <p>Telefone:</p> 
                        <p className="p_resposta">resposta</p>
                    </div>
                    <div className="div1_p">
                        <p>Data de solicitação:</p> 
                        <p className="p_resposta">resposta</p>
                    </div>
                    <div className="div1_p">
                        <p>Data esperada para a entrega:</p> 
                        <p className="p_resposta">resposta</p>
                    </div>
                        
                </div>
            </div>

            <div className="inf_requisicao">
                <div className="div_titulo_form"><p className="titulo_form">Informações da requisição</p></div>

                <div className="div2_informacao">
                    <div className="div2_p_input">
                        <p>Fornecedor:</p> 
                        <p className="p_resposta">Copiadora Módulo LTDA</p>
                    </div>
                    <div className="div2_p_input">
                        <p>Número:</p> 
                        <p className="p_resposta">2020-X</p>
                    </div>
                    <div className="div2_p_input">
                        <p>Nome da requisição:</p> 
                        <input placeholder="Título da sua requisição..." maxlength="50" className="div2_input_text" type="text"/>
                    </div>
                    
                    <div className="div2_p_input">
                        <p>Páginas:</p> 
                        <input placeholder="0" className="div2_input_number" type="number"/>
                    </div>
                    <div className="div2_p_input">
                        <p>Cópias:</p> 
                        <input placeholder="0" className="div2_input_number" type="number"/>
                    </div>
                    <div className="div2_p_input">
                        <p>Total de páginas:</p> 
                        <p className="p_resposta">00000</p>
                    </div>     
                </div>
                <div className="div_OBS">
                    <p className="div_OBS_titulo">Observação:</p>
                    <textarea className="div_OBS_input" placeholder="Escreva uma breve observação (não obrigatório)..." maxlength="255"></textarea>
                </div>

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
                <div className="div1_acabamento">

                    <div className="div_checkbox">
                        <label className="container">2 Grampos a cavalo
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Encadernação com espiral
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>


                    <div className="div_checkbox">
                        <label className="container">2 Grampos laterais
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>   
                        <label className="container">Capa em PVC
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>                    
                    </div>

                    <div className="div_checkbox">
                        <label className="container">Reduzido
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Capa em papel 150g/m2
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="div_checkbox">
                        <label className="container" >Preto e branco
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Colorido
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="div_checkbox">
                        <label className="container">Frente e verso
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <input type="checkbox"/>
                        </label>
                    </div>


                </div>
                <div className="acabamento_sub_titulo_form"><p className="titulo_form">Formato</p></div>
                <div className="div2_acabamento">

                    <div className="div_checkbox">
                        <label className="container">A3
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">A4
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>


                    <div className="div_checkbox">
                        <label className="container">A5
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>   
                        <label className="container">Outros(colocar em OBS)
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>                    
                    </div>
                </div>
                <div className="acabamento_sub_titulo_form"><p className="titulo_form">Suporte</p></div>
                <div className="div3_acabamento">
                <div className="div_checkbox">
                        <label className="container">Zipdrive
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Papel
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>


                    <div className="div_checkbox">
                        <label className="container">E-mail
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>   
                        <label className="container">Outros (colocar em OBS)
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>                    
                    </div>
                </div>
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

            <h5 className='titulo_upload'>Upload do exemplar:</h5>

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