import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import SaibaMais from '../SaibaMais'
import { Container, Info, Tabela, Title, Pesquisa, Input } from './styles';
import IconExcluir from '../../assets/img/excluir.png'
import IconSenha from '../../assets/img/senha.png'
import IconCaneta from '../../assets/img/caneta.png'
import axios from 'axios'
import Select from 'react-select'

export class Tabela_Funcionarios extends Component {

  //Iniciando o componente com o construtor recebendo as props e iniciando os estados
  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 15,
      currentPage: 0,
      search: '',
      UserParaEditar: '',
      UserParaDeletar: '',
      UserParaResetarSenha: '',
      NomeParaDeletar: '',
      NomeParaRestuarSenha: '',
      crumbs: ['Inicio', 'Registros'],

      //States para guardar os valores do campo 
      UserName: '',
      UserSobreNome: '',
      UserCargo: '',
      UserNif: '',
      UserTelefone: '',
      UserEmail: '',
      UserAdm: '',
      IdCargo: '',

      OpitionsCargo: [],

      showMenssage: false,
      menssage: ''



    }
    this.handlePageClick = this.handlePageClick.bind(this);

  }



  //funcao para fazer a ppaginacao funciona
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    });

  };

  //Caregar mais pessoas quando mudar de paginacao
  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice
    })

  }


  componentDidMount() {
    this.getData();

    //Pegando os cargos para listar
    axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-cargos`).then(async (res) => {
      const dados = res.data

      const options = dados.map(d => ({
        "value": d.id_cargo,
        "label": d.nome_cargo
      }))

      this.setState({
        OpitionsCargo: options
      })

    })

  }

  getData() {

    //Aqui vai o fetch para a api pegar os registros no banco de dados

    axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-funcionarios`)
      .then((res) => {

        //Retirando todos os usuarios inativos e deixando apenas os ativos para serem listados
        let infoArray = res.data
        console.log(infoArray)

        let userInativos = infoArray.filter((elemnt) => {

          if (elemnt.situacao === 'ativo') {
            return true
          }
          else {
            return false
          }
        })

        // slice = de quanto a quanto sera exibido na tela
        // slice = data.slice(15, 15 + 5) 
        //slice = 20, ou seja na pagina ira commecar a listar pelo numero 20
        var slice = userInativos.slice(this.state.offset, this.state.offset + this.state.perPage)

        this.setState({
          pageCount: Math.ceil(userInativos.length / this.state.perPage),
          orgtableData: userInativos,
          tableData: slice

        })
        console.log(this.state.orgtableData)

      })




  }
  refreshPage(){ 
    window.location.reload(); 
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) })
  }

  //Metodo para excluir funcionario
  excluirUser(nif) {
    let res = window.confirm(`Tem certeza que deseja excluir o usuario ${nif.target.name} ?`)

    if (res) {
      //Fazer a exclusao do usuario usando o nif.target.alt para acessar o nif
      alert('Usuario excluido com sucesso')
    }
  }

  //Setar nome e nif do usuario selecionado para executar alguma acao  deletar
  handleNameNif_delete(nif, name) {
    this.setState({
      UserParaDeletar: nif,
      NomeParaDeletar: name
    })
  }

  //Setar nome e nif do usuario selecionado para executar alguma acao  resetar senha
  handleNameNif_resetarSenha(nif, name) {
    this.setState({
      UserParaResetarSenha: nif,
      NomeParaRestuarSenha: name
    })
  }

  //Setar nome e nif do usuario selecionado para executar alguma acao  editar usuario
  handleNameNif_edit(nif) {
    //setando valores do usuario para editar
    let url = `${process.env.REACT_APP_SERVER_BASE}/buscar-user-nif/${nif}`
    axios.get(url).then((res) => {

      this.setState({

        UserName: res.data.nome,
        UserSobreNome: res.data.sobrenome,
        UserCargo: res.data.id_cargo,
        UserNif: res.data.nif,
        UserTelefone: res.data.telefone,
        UserEmail: res.data.email,
        UserAdm: res.data.administrativo
      })
    })

    this.setState({
      UserParaEditar: nif
    })
  }



  handleEcluirUser(nif) {
    alert("Usuario " + nif + " Excluido com sucesso")

    axios.put(`${process.env.REACT_APP_SERVER_BASE}/excluirfuncionarios`, {
      nif: this.state.UserParaDeletar,
    }).then((res) => {
      console.log(res)
    })
    // EXCLUIR AQUI !!!!!
    window.location.reload(); 
  }
  c
  handleResetarSenha(nif) {
   

    axios.put(`${process.env.REACT_APP_SERVER_BASE}/resetarSenha`, {
      nif: nif
    }).then((res) => {
      alert("Usuario" + nif + "teve a senha restaurada para 'senai115'")
    }).catch ((err) => {
      alert("Houve um erro ao restaurar a senha do funcionario")
    })
    // RESETAR SENHA AQUI !!!!!

    
  }

  handleEditUser(nif) {



    axios.put(`${process.env.REACT_APP_SERVER_BASE}/editar-funcionario`, {

      nome: this.state.UserName,
      sobrenome: this.state.UserSobreNome,
      id_cargo: this.state.UserCargo,
      nifEditar: this.state.UserNif,
      telefone: this.state.UserTelefone,
      email: this.state.UserEmail,
      administrativo: this.state.UserAdm,
      nif: this.state.UserParaEditar,

    }).then((res) => {
      console.log(res)

      this.setState({
        showMenssage: true,
        menssage: res.data
      })
    })

    // EDITAR AQUI AQUI !!!!!
  }



  handleChangeCargo(e) {
    this.setState({ IdCargo: e.value })
  }

  handleChangeUserName(e) {
    this.setState({ UserName: e.target.value })
  }

  handleChangeUserSobrenome(e) {
    this.setState({ UserSobreNome: e.target.value })
  }

  handleChangeUserCargo(e) {
    this.setState({ UserCargo: e.value })
  }

  handleChangeUserNifEdit(e) {
    this.setState({ UserNif: e.target.value })
  }

  handleChangeUserNifEdit(e) {
    this.setState({ UserNif: e.target.value })
  }

  handleChangeUserTelefone(e) {
    this.setState({ UserTelefone: e.target.value })
  }

  handleChangeUserEmail(e) {
    this.setState({ UserEmail: e.target.value })
  }

  handleChangeUserAdm(e) {
    this.setState({ UserAdm: e.target.value })
  }





  handleResetarInputs(e) {




    if (e.target !== e.currentTarget) {
      return
    }

    if (e.target === e.currentTarget) {

      this.myFormRef.reset();

      this.setState({

        UserName: '',
        UserSobreNome: '',
        UserCargo: '',
        UserNif: '',
        UserTelefone: '',
        UserEmail: '',
        UserAdm: ''
      })



    }
  }





  render() {

    let filterRegister = this.state.tableData.filter(
      (register) => {


        return String(register.nif).indexOf(this.state.search) !== -1 ||
          String(register.nome).toLowerCase().indexOf(this.state.search) !== -1 ||
          String(register.nome).indexOf(this.state.search) !== -1 ||
          String(register.sobrenome).toLowerCase().indexOf(this.state.search) !== -1 ||
          String(register.sobrenome).indexOf(this.state.search) !== -1 ||
          String(register.administrativo).toLowerCase().indexOf(this.state.search) !== -1 ||
          String(register.administrativo).indexOf(this.state.search) !== -1 ||
          // register.cargo.toLowerCase().indexOf(this.state.search) !== -1 ||
          // register.cargo.indexOf(this.state.search) !== -1 ||
          String(register.email).toLowerCase().indexOf(this.state.search) !== -1 ||
          String(register.telefone).toLowerCase().indexOf(this.state.search) !== -1 ||
          register.data_criacao.toLowerCase().indexOf(this.state.search) !== -1 ||
          register.data_criacao.indexOf(this.state.search) !== -1
      }
    )


    return (
      <Container>

        {/* Modal Excluir usuario */}
        <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Usuário</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="senha">
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="modal-body">
                      <p>Tem certeza que deseja excluir o usuario {this.state.NomeParaDeletar} ?</p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" onClick={() => this.handleEcluirUser(this.state.UserParaDeletar)}>Excluir Usuário</button>
              </div>
            </div>
          </div>
        </div>



        {/* Modal Restaurar Senha */}
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Senha</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="senha">
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="modal-body">
                      <p>Deseja resturar senha de {this.state.NomeParaRestuarSenha} para "senai115"</p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" onClick={() => this.handleResetarSenha(this.state.UserParaResetarSenha)}>Restaurar Senha</button>
              </div>
            </div>
          </div>
        </div>



        {/* Modal Ação  */}
        <div class="modal fade" onClick={e => this.handleResetarInputs(e)} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document" >
            <div class="modal-content" >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Usuário</h5>
                <button onClick={e => this.handleResetarInputs(e)} type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"  >&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form ref={(el) => this.myFormRef = el} className="nome">
                  <div class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "30px" }} for="nomeUser">Editar Nome:      </label>
                      <input style={{ width: "200px" }} id="nomeUser" defaultValue={this.state.UserName} onChange={(e) => { this.handleChangeUserName(e) }} class="form-control mx-sm-3" />
                    </div>
                  </div>

                  <div class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "30px" }} for="sobrenomeUser">Sobrenome:        </label>
                      <input style={{ width: "200px" }} id="sobrenomeUser" defaultValue={this.state.UserSobreNome} onChange={(e) => { this.handleChangeUserSobrenome(e) }} class="form-control mx-sm-3" />
                    </div>
                  </div>

                  <div class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "30px" }} for="inputPassword6">Editar Cargo:     </label>
                      <div style={{ width: 250 }}>
                        <Select style={{ width: "200px" }} options={this.state.OpitionsCargo}
                          onChange={
                            (e) => {
                              this.handleChangeCargo(this)
                              this.handleChangeUserCargo(e)
                            }} />

                      </div>
                    </div>
                  </div>
                  {/* <div class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "45px" }} for="nifUser">Editar NIF:      </label>
                      <input style={{ width: "200px" }} id="nifUser" class="form-control mx-sm-3" onChange={(e) => { this.handleChangeUserNifEdit(e) }} defaultValue={this.state.UserNif} />
                    </div>
                  </div> */}
                  <div class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "13px" }} for="telefoneUser">Editar Telefone:      </label>
                      <input style={{ width: "200px" }} id="telefoneUser" class="form-control mx-sm-3" onChange={(e) => { this.handleChangeUserTelefone(e) }} defaultValue={this.state.UserTelefone} />
                    </div>
                  </div>
                  <div class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "13px" }} for="emailUser">Editar Email:      </label>
                      <input style={{ width: "200px" }} id="emailUser" class="form-control mx-sm-3" onChange={(e) => { this.handleChangeUserEmail(e) }} defaultValue={this.state.UserEmail} />
                    </div>
                  </div>
                  <div class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group col-md-6">
                      <label for="inputState">O usuario tera acesso administartivo ?</label>
                      <select id="inputState" class="form-control" onChange={(e) => { this.handleChangeUserAdm(e) }}>
                        <option selected={this.state.UserAdm == 'nao' ? true : false}>nao</option>
                        <option selected={this.state.UserAdm == 'nao' ? false : true}>sim</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-inline" style={{ margin: "40px" }}>
                    {this.state.showMenssage == true ?
                      <div class="alert alert-success" role="alert">
                        {this.state.menssage} <br></br>
                        <button type="button" onClick={() => this.refreshPage()} class="btn btn-primary">Atualizar página</button>
                      </div> : <></>}

                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" onClick={() => this.handleEditUser(this.state.UserParaEditar)}>Alterar Usuário</button>
              </div>
            </div>
          </div>
        </div>

        <Info>
          <Title>Funcionários cadastrados</Title>
          <Pesquisa>
            <p>pesquisa:</p>
            <Input
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              placeholder="Ex: Danilo" />
          </Pesquisa>
        </Info>
        <Tabela>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"><strong>NIF</strong></th>
                <th scope="col"><strong>nome</strong></th>
                <th scope="col"><strong>sobrenome</strong></th>
                <th scope="col"><strong>cargo</strong></th>
                <th scope="col"><strong>email</strong></th>
                <th scope="col"><strong>fone</strong></th>
                <th scope="col"><strong>Adiministrativo</strong></th>
                <th scope="col"><strong>Data de criação</strong></th>
                <th scope="col"><strong>excluir</strong></th>
                <th scope="col"><strong>restaurar senha</strong></th>
                <th scope="col"><strong>ação</strong></th>
              </tr>
            </thead>
            <tbody>

              {
                filterRegister.map((element) => (
                  <tr>
                    <td>{element.nif}</td>
                    <td>{element.nome}</td>
                    <td>{element.sobrenome}</td>
                    <td>{element.nome_cargo}</td>
                    <td>{element.email}</td>
                    <td>{element.telefone}</td>
                    <td>{element.administrativo}</td>
                    <td>{element.data_criacao}</td>
                    <td><img data-toggle="modal" data-target="#exampleModal3" src={IconExcluir} onClick={() => this.handleNameNif_delete(element.nif, element.nome)} alt={element.nif} name={element.nome} style={{ height: '20x', width: '20px', marginLeft: '15px', cursor: 'pointer' }} /></td>
                    {/*Estou passando o nif da pessoa a ser excluida pelo alt da imagem */}
                    <td><img data-toggle="modal" data-target="#exampleModal2" src={IconSenha} onClick={() => this.handleNameNif_resetarSenha(element.nif, element.nome )} alt={element.nif} name={element.nome} style={{ height: '20x', width: '20px', marginLeft: '50px', cursor: 'pointer' }} /></td>

                    <td><img data-toggle="modal" data-target="#exampleModal" src={IconCaneta} onClick={() => this.handleNameNif_edit(element.nif)} alt={element.nif} name={element.nome} style={{ height: '20x', width: '20px', marginLeft: '10px', cursor: 'pointer' }} /></td>


                  </tr>

                ))
              }


            </tbody>
          </table>
        </Tabela>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />

        <hr></hr>
        <p style={{ color: "#b4a3a3", fontSize: "15px" }}>@Criado por Denison Portela, Ana L. Gomes, Felipe Braga, Guilherme Cunha e Caio Daniel !"</p>

      </Container>
    )
  }
}


export default Tabela_Funcionarios;