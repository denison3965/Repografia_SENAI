import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import  Button  from '../../components/Button'
import IconCloud from '../../assets/img/iconcloud.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Formulario() {


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

//__________________________________________________________________________________________________________________________________________________________________________________________________________________

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
    const [departamento, setDepartamento] = useState();
    const [coordenador, setCoordernador] = useState();




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

    const suporteReq = escolhido2();
    const formatoReq = escolhido1();
    

    const data = { 

        "nomeSolicitante": "Átila",
        "escolaSolicitante": "1.15",
        "telefone": "0000000",
        "dataSolicitante": dataSolicitante,
        "dataEntrega": dataEntrega,


        "fornecedor": "Copiadora Módulo LTDA",
        "numero": numeroReq,
        "nomeRequisicao": nomeReq,
        "paginas": paginas,
        "copias": copias,
        "totalPaginas": totalPaginas,
        "observacao": observacao,


        "departamento": departamento,

        "acabamento": array_acabamento,
        "formato": formatoReq,
        "suporte": suporteReq,
        "coodernador": coordenador,
        "arquivoExemplar": "",

    }


    function escolhido1() {
        var formato = '';
        const items = document.getElementsByName('groupOfDefaultRadios');
        for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
            formato = items[i].value
            break;
            }
        }  
        return formato;
    }
    function escolhido2() {
        var suporte = '';
        const items = document.getElementsByName('groupOfDefaultRadios2');
        for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
            suporte = items[i].value
            break;
            }
        }  
        return suporte;
    }
      
     function EnviarFormulario () {
        
        console.log(data)

     }
     

  return (
    <Container>
        <Header/>
        <h3 className="titulo_do_formulario" onClick={EnviarFormulario}>Solicitação de Serviços Reprográficos</h3>
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
                <select className="dropdown_form_direita" onChange={(e) => setDepartamento(e.target.value)}>
                    <option selected value="">Área de Atuação</option>
                    <option value="CT">CT</option>
                    <option value="CAI">CAI</option>
                    <option value="PC">PC</option>
                    <option value="CST">CST</option>
                    <option value="Pós Graduação">Pós Graduação</option>
                </select>
                <div className="dropdown_form_direita">
                        <p>{departamento}</p>
                </div>                
            </div>

            <div className="acabamento">
                <div className="div_titulo_form"><p className="titulo_form">Acabamento</p></div>
                <div className="div1_acabamento">

                    <div className="div_checkbox">
                        <label className="container">2 Grampos a cavalo
                            <input className="container_input_checkbox" type="checkbox" name="2 Grampos a cavalo" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Encadernação com espiral
                            <input className="container_input_checkbox" type="checkbox" name="Encadernação com espiral" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>


                    <div className="div_checkbox">
                        <label className="container">2 Grampos laterais
                            <input className="container_input_checkbox" type="checkbox" name="2 Grampos laterais" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>   
                        <label className="container">Capa em PVC
                            <input className="container_input_checkbox" type="checkbox" name="Capa em PVC" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>                    
                    </div>

                    <div className="div_checkbox">
                        <label className="container">Reduzido
                            <input className="container_input_checkbox" type="checkbox" name="Reduzido" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Capa em papel 150g/m2
                            <input className="container_input_checkbox" type="checkbox" name="Capa em papel 150g/m2" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="div_checkbox">
                        <label className="container" >Preto e branco
                            <input className="container_input_checkbox" type="checkbox" name="preto e branco"onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Colorido
                            <input className="container_input_checkbox" type="checkbox" name="Colorido" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="div_checkbox">
                        <label className="container">Frente e verso
                            <input className="container_input_checkbox" type="checkbox" name="Frente e verso" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">
                            <input className="container_input_checkbox" type="checkbox"/>
                        </label>
                    </div>


                </div>

                <div className="acabamento_sub_titulo_form"><p className="titulo_form">Formato</p></div>

                <div className="div2_acabamento">

                    <div className="div_checkbox">

                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input check_radio" id="radio1" name="groupOfDefaultRadios" value="A3"/>
                            <label className="custom-control-label" for="radio1"> <p className="p_radio">A3</p> </label>
                        </div> 

                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input" id="radio2" name="groupOfDefaultRadios" value="A4"/>
                            <label className="custom-control-label" for="radio2"> <p className="p_radio">A4</p> </label>
                        </div> 
                    </div>

                    <div className="div_checkbox">
                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input" id="radio3" name="groupOfDefaultRadios" value="A5"/>
                            <label className="custom-control-label" for="radio3"> <p className="p_radio">A5</p> </label>
                        </div> 

                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input" id="radio4" name="groupOfDefaultRadios" value="Outros (colocar em OBS)"/>
                            <label className="custom-control-label" for="radio4"> <p className="p_radio">Outros (colocar em OBS)</p> </label>
                        </div>  

                    </div>
                </div>

                <div className="acabamento_sub_titulo_form"><p className="titulo_form">Suporte</p></div>

                <div className="div3_acabamento">

                    <div className="div_checkbox">

                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input" id="radio5" name="groupOfDefaultRadios2" value="Zipdrive"/>
                            <label className="custom-control-label" for="radio5"> <p className="p_radio">Zipdrive</p> </label>
                        </div> 

                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input" id="radio6" name="groupOfDefaultRadios2" value="Papel"/>
                            <label className="custom-control-label" for="radio6"> <p className="p_radio">Papel</p> </label>
                        </div> 
                    </div>

                    <div className="div_checkbox">
                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input" id="radio7" name="groupOfDefaultRadios2" value="E-mail"/>
                            <label className="custom-control-label" for="radio7"> <p className="p_radio">E-mail</p> </label>
                        </div> 

                        <div className="custom-control custom-radio container">
                            <input type="radio" className="custom-control-input" id="radio8" name="groupOfDefaultRadios2" value="Outros (colocar em OBS)"/>
                            <label className="custom-control-label" for="radio8"> <p className="p_radio">Outros (colocar em OBS)</p> </label>
                        </div>  
                        
                    </div>
                </div>
            </div> 

            <div className="div_assinatura">
                <p className="assinatura">Assinatura ______________________________</p>
            </div>

               

        </form>

        <form className="form_baixo">

            <select className="dropdown_form_baixo" onChange={e => setCoordernador(e.target.value)}>
                <option selected value="">Coordenador</option>
                <option value="Sandra Sobrenome"> Sandra Sobrenome</option>
                <option value="Alexandre Sobrenome"> Alexandre Sobrenome</option>
                <option value="Fulano Sobrenome"> Fulano Sobrenome</option>
                <option value="Ciclano Sobrenome"> Ciclano Sobrenome</option>
            </select>

            <h5 className='titulo_upload'>Upload do exemplar:</h5>

            <div className="div_upload">
                <img className="img_cloud" src={IconCloud} alt=""/>
                <p className="text_upload">Arraste e solte um arquivo aqui <br/> ou</p>
                <input type="file" multiple="multiple" className="cursor-pointer input_exemplar" id="attachment" name="attachment"/>
            </div>

            {<Button fontStyle="italic" fontSize="1.8vw" title="Enviar" width="15vw" />}

        </form>
        

    </Container>
  );
}

export default Formulario;