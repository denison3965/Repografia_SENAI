import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import  Button  from '../../components/Button'
import IconCloud from '../../assets/img/iconcloud.png'

function Formulario() {

    // Logica para pegar as checkBox que foram selecionadas

        const array_nomes = ["2 Grampos a cavalo", "2 Grampos laterais", "Colorido", "Encadernação com espiral", "Frente e verso", "Reduzido", "preto e branco", "Capa em papel 150g/m2", "Capa em PVC"]
        let array_acabamento = []

        const [checkedItems, setCheckedItems] = useState(
            {
                "2 Grampos a cavalo": false,
                "2 Grampos laterais": false,
                "Colorido": false,
                "Encadernação com espiral": false,
                "Frente e verso": false,
                "Reduzido": false,
                "preto e branco": false,
                "Capa em papel 150g/m2": false,
                "Capa em PVC" : false

            }
            ); //plain object as state

        const handleChange = (event) => {
            // updating an object instead of a Map
            setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
        }

        useEffect(() => {
            //Criando um array que tera os estados binarios de cada acabamento, Ex: [ true, true, false, false ...]
            const array_bin = Object.values(checkedItems)

            array_bin.map((element, indice) => {
                
                if (element) {

                    let item = array_nomes[indice]
                    array_acabamento.push(item)
                    console.log(array_acabamento)

                }
            })

            
        }, [checkedItems]); 
    // **Logica para pegar as checkBox que foram selecionadas**  
  

    const [nomeReq, setNomeReq] = useState();
    const [paginas, setPaginas] = useState(null);
    const [copias, setCopias] = useState(null);
    const [totalPaginas, setTotalPaginas] = useState();
    const [aux , setAuxi] = useState(true);
    const [observacao, setObservacao] = useState();




    if (paginas != null && copias != null && aux == true) {
        setTotalPaginas( paginas * copias)
        setAuxi(false)
    }


    function pegarDataSolicitante(){
        var tempo = new Date();
        var dia = tempo.getDate();
        var mes = tempo.getMonth()+1;
        var ano = tempo.getFullYear();
        return (`${dia}/${mes}/${ano}`);
    }

    function pegarDataEntrega(){
        var dataEntrega = new Date();
        dataEntrega.setDate(dataEntrega.getDate()+15);

        var tempo2 = new Date(dataEntrega);
        var dia2 = tempo2.getDate();
        var mes2 = tempo2.getMonth()+1;
        var ano2 = tempo2.getFullYear();
        return (`${dia2}/${mes2}/${ano2}`);
    }
    
    var dataSolicitante = pegarDataSolicitante();
    var dataEntrega = pegarDataEntrega();


    function gerarNumeroRequisicao(){
        var dataAtual = new Date();
        var tempo = new Date(dataAtual);
        var dataAtual = tempo.getFullYear();
        return (`${dataAtual}`)

        /* Continuar lógica após a construção do banco de dados */
    }

    var numeroReq = gerarNumeroRequisicao();
    

    



    /* const data = { 

        nomeSolicitante: "Átila",
        escolaSolicitante: "1.15",
        telefone: "0000000",
        dataSolicitante: dataSolicitante,
        dataEntrega: dataEntrega,


        fornecedor: "Copiadora Módulo LTDA",
        numero: numeroReq,
        nomeRequisicao: nomereq,
        paginas: paginas,
        copias: setCopias,
        totalPaginas: setTotalPaginas,
        observacao: observacao,


        departamento: ,
        cc: "",

        acabamento: array_acabamento,
        formato: "",
        suporte: "",
        coodernador: "",
        arquivoExemplar: "",

     } */

  return (
    <Container>
        <Header/>
        <h3 className="titulo_do_formulario">Solicitação de Serviços Reprográficos</h3>
        <div className="div_pai--button">
            <div className="sair--button"><p>Voltar</p></div>
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
                        <input onChange={e => setNomeReq(e.target.value)} placeholder="Título da sua requisição..." maxlength="50" className="div2_input_text" type="text"/>
                    </div>
                    
                    <div className="div2_p_input">
                        <p>Páginas:</p> 
                        <input onChange={
                            function (e) {
                                setPaginas(e.target.value)
                                setAuxi(true)
                            }
                            } placeholder="0" className="div2_input_number" type="number"/>
                    </div>
                    <div className="div2_p_input">
                        <p>Cópias:</p> 
                        <input onChange={
                            function (e) {
                                setCopias(e.target.value)
                                setAuxi(true)
                            }
                            } placeholder="0" className="div2_input_number" type="number"/>
                    </div>
                    <div className="div2_p_input">
                        <p>Total de páginas:</p> 
                        <p className="p_resposta">{totalPaginas}</p>
                    </div>     
                </div>
                <div className="div_OBS">
                    <p className="div_OBS_titulo">Observação:</p>
                    <textarea onChange={e => setObservacao(e.target.value)} className="div_OBS_input" placeholder="Escreva uma breve observação (não obrigatório)..." maxlength="255"></textarea>
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
                            <input type="checkbox" name="2 Grampos a cavalo" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Encadernação com espiral
                            <input type="checkbox" name="Encadernação com espiral" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>


                    <div className="div_checkbox">
                        <label className="container">2 Grampos laterais
                            <input type="checkbox" name="2 Grampos laterais" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>   
                        <label className="container">Capa em PVC
                            <input type="checkbox" name="Capa em PVC" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>                    
                    </div>

                    <div className="div_checkbox">
                        <label className="container">Reduzido
                            <input type="checkbox" name="Reduzido" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Capa em papel 150g/m2
                            <input type="checkbox" name="Capa em papel 150g/m2" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="div_checkbox">
                        <label className="container" >Preto e branco
                            <input type="checkbox" name="preto e branco"onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Colorido
                            <input type="checkbox" name="Colorido" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="div_checkbox">
                        <label className="container">Frente e verso
                            <input type="checkbox" name="Frente e verso" onChange={handleChange}/>
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

export default Formulario;