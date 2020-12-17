import React, { Component } from 'react'

import { Container } from './styles';

class PDF extends Component {

    render() {
        return (
            <Container>
                <form className="form_esquerda">

                    <div className="inf_solicitacao">
                        <div className="div_titulo_form"><p className="titulo_form">Informações da solicitação</p></div>

                        <div className="div1_informacao">
                            <div className="div1_p">
                                <p>Nome do Solicitante:</p>
                                <p className="p_resposta"></p>
                            </div>
                            <div className="div1_p">
                                <p>Escola solicitante:</p>
                                <p className="p_resposta">SENAI 1.15</p>
                            </div>
                            <div className="div1_p">
                                <p>Telefone:</p>
                                <p className="p_resposta"></p>
                            </div>
                            <div className="div1_p">
                                <p>Data de solicitação:</p>
                                <p className="p_resposta"></p>
                            </div>
                            <div className="div1_p">
                                <p>Data esperada para a entrega:</p>
                                <p className="p_resposta"></p>
                            </div>

                        </div>
                    </div>

                    <div className="inf_requisicao">
                        <div className="div_titulo_form"><p className="titulo_form">Informações da requisição</p></div>

                        <div className="div2_informacao">
                            <div className="div2_p_input">
                                <p>Fornecedor:</p>
                                <p className="p_resposta"></p>
                            </div>
                            <div className="div2_p_input">
                                <p>Número:</p>
                                <p className="p_resposta"></p>
                            </div>
                            <div className="div2_p_input">
                                <p>Nome da requisição:</p>
                                <input  placeholder="Título da sua requisição..." maxlength="50" className="div2_input_text" type="text" />
                            </div>

                            <div className="div2_p_input">
                                <p>Páginas:</p>
                                <input placeholder="0" className="div2_input_number" type="number" />
                            </div>
                            <div className="div2_p_input">
                                <p>Cópias:</p>
                                <input  placeholder="0" className="div2_input_number" type="number" />
                            </div>
                            <div className="div2_p_input">
                                <p>Total de páginas:</p>
                                <p className="p_resposta"></p>
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
                        <div className="campo_select">
                           
                        </div>

                        <div className="dropdown_form_direita">
                            <p></p>
                        </div>
                    </div>

                    <div className="acabamento">
                        <div className="div_titulo_form"><p className="titulo_form">Acabamento</p></div>
                        <div className="div1_acabamento">

                            <div className="div_checkbox">
                                <label className="container">2 Grampos a cavalo
                                <input className="container_input_checkbox" type="checkbox" name="2 Grampos a cavalo"  />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Encadernação com espiral
                                <input className="container_input_checkbox" type="checkbox" name="Encadernação com espiral"  />
                                    <span className="checkmark"></span>
                                </label>
                            </div>


                            <div className="div_checkbox">
                                <label className="container">2 Grampos laterais
                                <input className="container_input_checkbox" type="checkbox" name="2 Grampos laterais"  />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Capa em PVC
                                <input className="container_input_checkbox" type="checkbox" name="Capa em PVC"  />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <div className="div_checkbox">
                                <label className="container">Reduzido
                                <input className="container_input_checkbox" type="checkbox" name="Reduzido"  />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Capa em papel 150g/m2
                                <input className="container_input_checkbox" type="checkbox" name="Capa em papel 150g/m2"  />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <div className="div_checkbox">
                                <label className="container" >Preto e branco
                                <input className="container_input_checkbox" type="checkbox" name="preto e branco"  />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Colorido
                                <input className="container_input_checkbox" type="checkbox" name="Colorido"  />
                                    <span className="checkmark"></span>
                                </label>
                            </div>

                            <div className="div_checkbox">
                                <label className="container">Frente e verso
                                <input className="container_input_checkbox" type="checkbox" name="Frente e verso"  />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">
                                    <input className="container_input_checkbox" type="checkbox" />
                                </label>
                            </div>


                        </div>

                        <div className="acabamento_sub_titulo_form"><p className="titulo_form">Formato</p></div>

                        <div className="div2_acabamento">

                            <div className="div_checkbox">

                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input check_radio" id="radio1" name="groupOfDefaultRadios" value={1} />
                                    <label className="custom-control-label" for="radio1"> <p className="p_radio">A3</p> </label>
                                </div>

                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input" id="radio2" name="groupOfDefaultRadios" value={2} />
                                    <label className="custom-control-label" for="radio2"> <p className="p_radio">A4</p> </label>
                                </div>
                            </div>

                            <div className="div_checkbox">
                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input" id="radio3" name="groupOfDefaultRadios" value={3} />
                                    <label className="custom-control-label" for="radio3"> <p className="p_radio">A5</p> </label>
                                </div>

                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input" id="radio4" name="groupOfDefaultRadios" value={4} />
                                    <label className="custom-control-label" for="radio4"> <p className="p_radio">Outros (colocar em OBS)</p> </label>
                                </div>

                            </div>
                        </div>

                        <div className="acabamento_sub_titulo_form"><p className="titulo_form">Suporte</p></div>

                        <div className="div3_acabamento">

                            <div className="div_checkbox">

                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input" id="radio5" name="groupOfDefaultRadios2" value={1} />
                                    <label className="custom-control-label" for="radio5"> <p className="p_radio">Zipdrive</p> </label>
                                </div>

                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input" id="radio6" name="groupOfDefaultRadios2" value={2} />
                                    <label className="custom-control-label" for="radio6"> <p className="p_radio">Papel</p> </label>
                                </div>
                            </div>

                            <div className="div_checkbox">
                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input" id="radio7" name="groupOfDefaultRadios2" value={3} />
                                    <label className="custom-control-label" for="radio7"> <p className="p_radio">E-mail</p> </label>
                                </div>

                                <div className="custom-control custom-radio container">
                                    <input type="radio" className="custom-control-input" id="radio8" name="groupOfDefaultRadios2" value={4} />
                                    <label className="custom-control-label" for="radio8"> <p className="p_radio">Outros (colocar em OBS)</p> </label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="div_assinatura">
                        <p className="assinatura">Assinatura ______________________________</p>
                    </div>



                </form>

            </Container>
        )
    }
}

export default PDF;