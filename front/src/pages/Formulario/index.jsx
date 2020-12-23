import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import IconCloud from '../../assets/img/iconcloud.png'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Loading from '../../assets/img/loading.gif'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Select from 'react-select'


const cookies = new Cookies()

const loading = {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
}

function Formulario() {


    //Verificando Se o usuario esta autorizado para acessar essa pagina
    const history = useHistory()
    const [showPage, setShowPage] = useState(false)
    const [infoUser, setInfoUser] = useState({ nome: '', sobrenome: '' })

    //tratamento de errro 
    const [msg_error, setMsgError] = useState()
    const [msg_acerto, setMsgAcerto] = useState()


    const [listaDepartamento, setListaDepartamento] = useState([])
    const [optionsDepartamento, setOptionsDepartamento] = useState([])

    const [fornecedor, setFornecedor] = useState([])

    useEffect(() => {
        var token = cookies.get('tokenJWT')


        axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
            method: 'GET',
            headers: { 'X-access-token': token }
        }).then((res) => {

            if (res.data[0].auth) {
                setShowPage(true)

                //Pegando as informacoes do user pelo nif
                let url = `${process.env.REACT_APP_SERVER_BASE}/buscar-user-nif/${res.data[0].nif}`

                axios.get(url).then(async (res) => {

                    await setInfoUser(res.data)

                }).catch((err) => {
                    console.log(err)
                })

                //Pegando lista de departamento

                axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-departamento`).then((res) => {

                    const options = res.data.map(d => ({
                        "value": d.id_departamento,
                        "label": d.nome_departamento
                    }))


                    setOptionsDepartamento(options)
                    setListaDepartamento(res.data)
                })

                //Pegando fornecedor
                axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-fornecedor`).then((res) => {

                    setFornecedor(res.data[0])
                })
            }
            else {
                history.push("/")
            }

        }).catch(() => { history.push("/") })
    }, [])
    //**Verificando Se o usuario esta autorizado para acessar essa pagina**

    //__________________________________________________________________________________________________________________________________________________________________________________________________________________

    // Logica para pegar as checkBox que foram selecionadas

    //const array_nomes = ["2 Grampos a cavalo", "2 Grampos laterais", "Colorido", "Encadernação com espiral", "Frente e verso", "Reduzido", "preto e branco", "Capa em papel 150g/m2", "Capa em PVC"]
    const array_nomes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let array_acabamento = []
    const [arrayAcabamento, setArrayAcabamento] = useState([])

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
            "Capa em PVC": false

        }
    ); //plain object as state

    const handleChange = (event) => {
        // updating an object instead of a Map
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    }

    useEffect(() => {
        //Criando um array que tera os estados binarios de cada acabamento, Ex: [ true, true, false, false ...]
        const array_bin = Object.values(checkedItems)

        array_bin.map((element, indice) => {

            if (element) {

                let item = array_nomes[indice]
                array_acabamento.push(item)
                setArrayAcabamento(array_acabamento)

            }
        })


    }, [checkedItems]);
    // **Logica para pegar as checkBox que foram selecionadas**  


    const [nomeReq, setNomeReq] = useState(null);
    const [paginas, setPaginas] = useState(null);
    const [copias, setCopias] = useState(null);
    const [totalPaginas, setTotalPaginas] = useState(null);
    const [aux, setAuxi] = useState(true);
    const [observacao, setObservacao] = useState(null);
    const [departamento, setDepartamento] = useState(null);
    const [responsavel, setResponsavel] = useState(null);
    const [numeroReq, setNumeroReq] = useState(null)
    const [fileUploaed, setFileUploaed] = useState(null)


    function onChangeHandler(event) {

        const uploadfile = event.target.files[0];
        setFileUploaed(uploadfile)

    }


    if (paginas != null && copias != null && aux == true) {
        setTotalPaginas(paginas * copias)
        setAuxi(false)
    }


    function pegarDataSolicitante() {
        var tempo = new Date();
        var dia = tempo.getDate();
        var mes = tempo.getMonth() + 1;
        var ano = tempo.getFullYear();
        return (`${dia}/${mes}/${ano}`);
    }

    function pegarDataEntrega() {
        var dataEntrega = new Date();
        dataEntrega.setDate(dataEntrega.getDate() + 15);

        var tempo2 = new Date(dataEntrega);
        var dia2 = tempo2.getDate();
        var mes2 = tempo2.getMonth() + 1;
        var ano2 = tempo2.getFullYear();
        return (`${dia2}/${mes2}/${ano2}`);
    }

    var dataSolicitante = pegarDataSolicitante();
    var dataEntrega = pegarDataEntrega();







    //Logica para pegar o radio marcado

    const [radioSuporte, setRadioSuporte] = useState()

    function setasValorSupporte(e) {
        setRadioSuporte(e.target.value)
    }

    const [radioFormato, setRadioFormato] = useState()

    function setasValorFormato(e) {
        setRadioFormato(e.target.value)
    }


    const data_to_upload_file = {
        "file": fileUploaed,
    }
    const data = {

        "nomeSolicitante": infoUser.nome,
        "nif": infoUser.nif,
        "escolaSolicitante": "1.15",
        "telefone": "0000000",
        "dataSolicitante": dataSolicitante,
        "dataEntrega": dataEntrega,


        "fornecedor": fornecedor.id_fornecedor,
        "nome_fornecedor": fornecedor.nome_fornecedor,
        "numero": numeroReq,
        "nomeRequisicao": nomeReq,
        "paginas": paginas,
        "copias": copias,
        "totalPaginas": totalPaginas,
        "observacao": observacao,


        "departamento": departamento,

        "acabamento": arrayAcabamento,
        "formato": radioFormato,
        "suporte": radioSuporte,
        "coodernador": responsavel,

        "status" : "ativo",
        "feedback": "4"

    }




    function EnviarFormulario() {

        let numero_teste
        //Enviar Informmacoes para gravar no banco de dados
        axios.post(`${process.env.REACT_APP_SERVER_BASE}/add-requisicao`, data)
            .then((res) => {

                if (res.data.message === 'Requisição feita com sucesso !') {
                     setMsgError(null)
                    data.numero = res.data.numeroReq
                    numero_teste = res.data.numeroReq
                    setNumeroReq(res.data.numeroReq)


                    setMsgAcerto(res.data.message)


                    const myFile = new FormData();
                    myFile.append('file', fileUploaed)
                    myFile.append('id_requisicao', res.data.numeroReq)

                    //Gravar o arquivo exemplar no banco
                    axios.post(`${process.env.REACT_APP_SERVER_BASE}/file-requisicao`, myFile).then((res) => {
                       
                    })
                    data.numero = numero_teste

                    //Gerando pdf
                    axios.post(`${process.env.REACT_APP_SERVER_BASE}/criar-pdf-requisicao`, data).then((result) => {


                        //Pegando o nome do arquivo que esta dentro de uma url
                        let url = result.data.filename

                        let array_url = url.split('/')

                        let nome_pdf = array_url[array_url.length - 1];


                        //Pegando pdf do servidor e imprimindo ele
                        axios({
                            url: `${process.env.REACT_APP_SERVER_BASE}/pegar-pdf-requisicao/${nome_pdf}`, //your url
                            method: 'GET',
                            responseType: 'blob', // important
                        }).then((response) => {
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'file.pdf'); //or any other extension
                            document.body.appendChild(link);
                            link.click();
                        });
                    })

                }
                else {
                     setMsgAcerto(null)
                    setMsgError(res.data)
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            {
                showPage
                    ? <Container>
                        <Header />
                        <h3 className="titulo_do_formulario">Solicitação de Serviços Reprográficos</h3>
                        <div className="div_pai--button">
                            <Link to="/"><div className="sair--button"><p>Sair</p></div> </Link>
                        </div>


                        <Container>
                            <form className="form_esquerda">

                                <div className="inf_solicitacao">
                                    <div className="div_titulo_form"><p className="titulo_form">Informações da solicitação</p></div>

                                    <div className="div1_informacao">
                                        <div className="div1_p">
                                            <p>Nome do Solicitante:</p>
                                            <p className="p_resposta">{infoUser.nome + " " + infoUser.sobrenome}</p>
                                        </div>
                                        <div className="div1_p">
                                            <p>Escola solicitante:</p>
                                            <p className="p_resposta">SENAI 1.15</p>
                                        </div>
                                        <div className="div1_p">
                                            <p>Telefone:</p>
                                            <p className="p_resposta">{infoUser.telefone}</p>
                                        </div>
                                        <div className="div1_p">
                                            <p>Data de solicitação:</p>
                                            <p className="p_resposta">{dataSolicitante}</p>
                                        </div>
                                        <div className="div1_p">
                                            <p>Data esperada para a entrega:</p>
                                            <p className="p_resposta">{dataEntrega}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="inf_requisicao">
                                    <div className="div_titulo_form"><p className="titulo_form">Informações da requisição</p></div>

                                    <div className="div2_informacao">
                                        <div className="div2_p_input">
                                            <p>Fornecedor:</p>
                                            <p className="p_resposta">{fornecedor.nome_fornecedor}</p>
                                        </div>
                                        <div className="div2_p_input">
                                            <p>Número:</p>
                                            <p className="p_resposta"></p>
                                        </div>
                                        <div className="div2_p_input">
                                            <p>Nome da requisição:</p>
                                            <input onChange={e => setNomeReq(e.target.value)} placeholder="Título da sua requisição..." maxlength="50" className="div2_input_text" type="text" />
                                        </div>

                                        <div className="div2_p_input">
                                            <p>Páginas:</p>
                                            <input onChange={
                                                function (e) {
                                                    setPaginas(e.target.value)
                                                    setAuxi(true)
                                                }
                                            } placeholder="0" className="div2_input_number" type="number" />
                                        </div>
                                        <div className="div2_p_input">
                                            <p>Cópias:</p>
                                            <input onChange={
                                                function (e) {
                                                    setCopias(e.target.value)
                                                    setAuxi(true)
                                                }
                                            } placeholder="0" className="div2_input_number" type="number" />
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
                                    <div className="campo_select">
                                        <Select style={{ width: "500px" }} options={optionsDepartamento} isSearchable required onChange={(e) => setDepartamento(e.value)} />
                                    </div>

                                    <div className="campo_CC">
                                        <p>{listaDepartamento.map((element) => {
                                            if (element.id_departamento == departamento) {
                                                return element.centro_custo
                                            }
                                        })}</p>
                                    </div>
                                </div>

                                <div className="acabamento">
                                    <div className="div_titulo_form"><p className="titulo_form">Acabamento</p></div>
                                    <div className="div1_acabamento">

                                        <div className="div_checkbox">
                                            <label className="container">2 Grampos a cavalo
                                                    <input className="container_input_checkbox" type="checkbox" name="2 Grampos a cavalo" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Encadernação com espiral
                                                    <input className="container_input_checkbox" type="checkbox" name="Encadernação com espiral" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>


                                        <div className="div_checkbox">
                                            <label className="container">2 Grampos laterais
                                                    <input className="container_input_checkbox" type="checkbox" name="2 Grampos laterais" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Capa em PVC
                                                     <input className="container_input_checkbox" type="checkbox" name="Capa em PVC" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>

                                        <div className="div_checkbox">
                                            <label className="container">Reduzido
                                                    <input className="container_input_checkbox" type="checkbox" name="Reduzido" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Capa em papel 150g/m2
                                                    <input className="container_input_checkbox" type="checkbox" name="Capa em papel 150g/m2" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>

                                        <div className="div_checkbox">
                                            <label className="container" >Preto e branco
                                                    <input className="container_input_checkbox" type="checkbox" name="preto e branco" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">Colorido
                                                    <input className="container_input_checkbox" type="checkbox" name="Colorido" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>

                                        <div className="div_checkbox">
                                            <label className="container">Frente e verso
                                                    <input className="container_input_checkbox" type="checkbox" name="Frente e verso" onChange={handleChange} />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="container">
                                                <input className="container_input_checkbox" type="checkbox" />
                                            </label>
                                        </div>


                                    </div>

                                    <div className="acabamento_sub_titulo_form"><p className="titulo_form">Formato</p></div>

                                    <div className="div3_acabamento">
                                        <div className="div_checkbox">

                                            <div class="form-check container" style={{ marginBottom: 1 }} >
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorFormato(e)} type="radio" name="exampleRadios2" id="exampleRadios1" value={1} />
                                                <label class="form-check-label" for="exampleRadios1">
                                                    <p className="p_radio">A3</p>
                                                </label>
                                            </div>
                                            <div class="form-check container">
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorFormato(e)} type="radio" name="exampleRadios2" id="exampleRadios2" value={3} />
                                                <label class="form-check-label" for="exampleRadios2">
                                                    <p className="p_radio">A5</p>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="div_checkbox container">
                                            <div class="form-check container" style={{ marginBottom: 1 }}>
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorFormato(e)} type="radio" name="exampleRadios2" id="exampleRadios3" value={2} />
                                                <label class="form-check-label" for="exampleRadios3">
                                                    <p className="p_radio">A4</p>
                                                </label>
                                            </div>

                                            <div class="form-check container">
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorFormato(e)} type="radio" name="exampleRadios2" id="exampleRadios4" value={4} />
                                                <label class="form-check-label" for="exampleRadios4">
                                                    <p className="p_radio">Outros (Colocar em OBS )</p>
                                                </label>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="acabamento_sub_titulo_form"><p className="titulo_form">Suporte</p></div>

                                    <div className="div3_acabamento">

                                        <div className="div_checkbox">



                                            <div class="form-check container" style={{ marginBottom: 1 }} >
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorSupporte(e)} type="radio" name="exampleRadios" id="exampleRadios5" value={1} />
                                                <label class="form-check-label" for="exampleRadios5">
                                                    <p className="p_radio">Zipdrive</p>
                                                </label>
                                            </div>
                                            <div class="form-check container">
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorSupporte(e)} type="radio" name="exampleRadios" id="exampleRadios6" value={2} />
                                                <label class="form-check-label" for="exampleRadios6">
                                                    <p className="p_radio">Papel</p>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="div_checkbox">
                                            <div class="form-check container" style={{ marginBottom: 1 }}>
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorSupporte(e)} type="radio" name="exampleRadios" id="exampleRadios7" value={3} />
                                                <label class="form-check-label" for="exampleRadios7">
                                                    <p className="p_radio">Email</p>
                                                </label>
                                            </div>

                                            <div class="form-check container">
                                                <input style={{ height: 20, width: 20, marginLeft: -30 }} class="form-check-input" onClick={(e) => setasValorSupporte(e)} type="radio" name="exampleRadios" id="exampleRadios8" value={4} />
                                                <label class="form-check-label" for="exampleRadios8">
                                                    <p className="p_radio">Outros (Colocar em OBS )</p>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="div_assinatura">
                                    <p className="assinatura">Assinatura ______________________________</p>
                                </div>



                            </form>



                            <form className="form_baixo">

                                <h5 className='titulo_upload'>Upload do exemplar:</h5>

                                <div className="div_upload">
                                    <img className="img_cloud" src={IconCloud} alt="" />
                                    <p className="text_upload">Arraste e solte apenas um arquivo aqui</p>
                                    <div className="input--File"> 
                                    <input type="file" className="cursor-pointer" id="attachment" name="file" onChange={onChangeHandler} />
                                    </div>
                                    
                                </div>

                                <button style={{ width: "150px" }} onClick={EnviarFormulario} type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Enviar</button>

                                {/* Modal  */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div>
                                                    {msg_error != null ? <div className="alert alert-danger">{msg_error} </div> : null}                                                  
                                                    {msg_acerto != null ? <div className="alert alert-success" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    {msg_acerto}
                                                    </div> : null}
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Sair</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr></hr>
        <p style={{ color: "#b4a3a3", fontSize: "15px" }}>@Criado por Denison Portela, Ana L. Gomes, Felipe Braga, Guilherme Cunha e Caio Daniel !</p>       
                            </form>
                        </Container>

                    </Container>

                    : <div>
                        <div style={loading}>
                            <img src={Loading} alt="loading"></img>
                        </div>
                    </div>
            }
        </div>


    );
}

export default Formulario;