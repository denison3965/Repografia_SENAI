import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import SaibaMais from '../SaibaMais'
import { Container, Info, Tabela, Title, Pesquisa, Input } from './styles';
import IconExcluir from '../../assets/img/excluir.png'
import IconSenha from '../../assets/img/senha.png'
import IconCaneta from '../../assets/img/caneta.png'
import axios from 'axios'

export class Tabela_Funcionarios extends Component {

  //Iniciando o componente com o construtor recebendo as props e iniciando os estados
  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
      search: '',
      crumbs: ['Inicio', 'Registros']


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

  //Caregar mais pessoas quando mudas de paginacao
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

  }

  getData() {

    //Aqui vai o fetch para a api pegar os registros no banco de dados

    axios.get('http://localhost:3000/v1/pegar-funcionarios')
      .then((res) => {

        //Retirando todos os usuarios inativos e deixando apenas os ativos para serem listados
        let infoArray = res.data

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

  // setarSenha(nif) {
  //   let res = window.confirm(`Tem certeza que deseja restaurar a senha do funcionario ${nif.target.name} ?     Se sim a senha sera restaurada para 'senai115'`)

  //   if (res) {
  //     //Setar senha para 'senai115' no banco de dados usando o nif.target.alt para acessar o nif
  //     alert(`senha do usuario ${nif.target.name} foi restaurada para 'senai115' com sucesso`)
  //   }
  // }

  // editarUser(nif) {
  //   let res = window.confirm(`Tem certeza que deseja editar o usuario ${nif.target.name} ?`)

  // }


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
                      <p>Tem certeza que deseja excluir o usuario ?</p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Excluir Usuário</button>
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
                      <p>Tem certeza que deseja restaurar a senha do funcionario?     Se sim a senha sera restaurada para 'senai115'</p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Restaurar Senha</button>
              </div>
            </div>
          </div>
        </div>



        {/* Modal Ação  */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Usuário</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="nome">
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "30px" }} for="inputPassword6">Editar Nome:      </label>
                      <input style={{ width: "200px" }} id="inputPassword6" class="form-control mx-sm-3" />
                    </div>
                  </form>
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "30px" }} for="inputPassword6">Editar Cargo:     </label>
                      <input style={{ width: "200px" }} id="inputPassword6" class="form-control mx-sm-3" />
                    </div>
                  </form>
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "45px" }} for="inputPassword6">Editar NIF:      </label>
                      <input style={{ width: "200px" }} id="inputPassword6" class="form-control mx-sm-3" />
                    </div>
                  </form>
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "13px" }} for="inputPassword6">Editar Telefone:      </label>
                      <input style={{ width: "200px" }} id="inputPassword6" class="form-control mx-sm-3" />
                    </div>
                  </form>
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group">
                      <label style={{ marginRight: "13px" }} for="inputPassword6">Editar Email:      </label>
                      <input style={{ width: "200px" }} id="inputPassword6" class="form-control mx-sm-3" />
                    </div>
                  </form>
                  <form class="form-inline" style={{ margin: "40px" }}>
                    <div class="form-group col-md-6">
                      <label for="inputState">O usuario tera acesso administartivo ?</label>
                      <select id="inputState" class="form-control">
                        <option selected>nao</option>
                        <option>sim</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Alterar Usuário</button>
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
                    <td>{element.cargo}</td>
                    <td>{element.email}</td>
                    <td>{element.telefone}</td>
                    <td>{element.administrativo}</td>
                    <td>{element.data_criacao}</td>
                    <td><img data-toggle="modal" data-target="#exampleModal3" src={IconExcluir} alt={element.nif} name={element.nome} style={{ height: '20x', width: '20px', marginLeft: '15px', cursor: 'pointer' }} /></td>
                    {/*Estou passando o nif da pessoa a ser excluida pelo alt da imagem */}
                    <td><img data-toggle="modal" data-target="#exampleModal2" src={IconSenha} alt={element.nif} name={element.nome} style={{ height: '20x', width: '20px', marginLeft: '50px', cursor: 'pointer' }} /></td>

                    <td><img data-toggle="modal" data-target="#exampleModal" src={IconCaneta} alt={element.nif} name={element.nome} style={{ height: '20x', width: '20px', marginLeft: '10px', cursor: 'pointer' }} /></td>


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
        <p style={{ color: "#ccc", fontSize: "15px" }}>@SENAI Suíço-Brasileira "Paulo Ernesto Tolle"</p>

      </Container>
    )
  }
}


export default Tabela_Funcionarios;