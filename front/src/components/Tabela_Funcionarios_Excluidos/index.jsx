import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import IconVoltar from '../../assets/img/voltar.png'
import { Container, Info, Tabela, Title, Pesquisa, Input  } from './styles';
import axios from 'axios'

export class Tabela_Funcionarios_Excluidos extends Component {

    //Iniciando o componente com o construtor recebendo as props e iniciando os estados
    constructor(props) {
      super(props)
  
      this.state ={
        offset: 0,
        tableData: [],
        orgtableData: [],
        perPage:5,
        currentPage: 0,
        search: '',
        UserParaRestaurar: '',
        NomeParaRestaurar: '',

        crumbs: ['Inicio', 'Registros']
        
  
      }
      this.handlePageClick = this.handlePageClick.bind(this);
  
    }

    //Metodo para restaurar funcionario
    restaurarUser(nif) {
      let res = window.confirm(`Tem certeza que deseja restaurar o usuario ${nif.target.name} ?`)

      if (res) {
        //Fazer a restauração do usuario usando o nif.target.alt para acessar o nif
        alert('Usuario restaurado com sucesso')
        
      }
    }

    //Setar nome e nif do usuario selecionado para executar alguma acao  deletar
    NameNif_restore(nif, name) {
      this.setState({
        UserParaRestaurar: nif,
        NomeParaRestaurar: name
      })
    }

    click_RestaurarUser(nif) {


      axios.put('http://localhost:3000/v1/restaurarfuncionario', {
        nif: this.state.UserParaRestaurar,
      }).then((res) => {
        console.log(res)
        alert("Usuario " + nif + " Restaurado com sucesso")
        window.location.reload(); 
      })
      // RESTAURAR AQUI !!!!!
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
              tableData:slice
          })
      
      }
  
  
    componentDidMount(){
      this.getData();
  
    }
  
    getData() {
  
      axios.get(`${process.env.REACT_APP_SERVER_BASE}/pegar-funcionarios`)
      .then((res) => {
        // slice = de quanto a quanto sera exibido na tela
        // slice = data.slice(15, 15 + 5) 
        //slice = 20, ou seja na pagina ira commecar a listar pelo numero 20

        //Retirando todos os usuarios ativos e deixando apenas os inativos para serem listados
        let infoArray = res.data

        let userInativos = infoArray.filter((elemnt) => {
          
          if(elemnt.situacao === 'inativo') 
          {
            return true
          }
          else
          {
            return false
          }
        })

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
      this.setState({search: event.target.value.substr(0,20)})
    }

    restaurarUsuario(nif) {
      let res = window.confirm(`Tem certeza que deseja restaurar o funcionario ${nif.target.name} ?`)
    
      if (res) {
        //Setar senha para 'senai115' no banco de dados usando o nif.target.alt para acessar o nif
        alert(`O usuario ${nif.target.name} foi restaurado com sucesso`)
      }
    }
    
  
    render(){
  
      let filterRegister = this.state.tableData.filter(
        (register) => {
          return String(register.nif).toLowerCase().indexOf(this.state.search) !== -1 ||
                 String(register.nome).toLowerCase().indexOf(this.state.search) !== -1 ||
                 String(register.nome).indexOf(this.state.search) !== -1 ||
                 String(register.sobrenome).toLowerCase().indexOf(this.state.search) !== -1 ||
                 String(register.sobrenome).indexOf(this.state.search) !== -1 ||
                 String(register.administrativo).toLowerCase().indexOf(this.state.search) !== -1 ||
                 String(register.administrativo).indexOf(this.state.search) !== -1 ||
                 String(register.cargo).toLowerCase().indexOf(this.state.search) !== -1 ||
                 String(register.cargo).indexOf(this.state.search) !== -1 ||
                 String(register.email).indexOf(this.state.search) !== -1 ||
                 String(register.telefone).toLowerCase().indexOf(this.state.search) !== -1 ||
                 String(register.data_criacao).toLowerCase().indexOf(this.state.search) !== -1 ||
                 String(register.data_criacao).indexOf(this.state.search) !== -1 ||
                 String(register.data_suspensao).toLowerCase().indexOf(this.state.search) !== -1 
                 
        }
      )
  
      return(
        <Container>

          {/* Modal Restaurar Senha */}
        <div class="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <p>Gostaria de restaurar o usuário?</p>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-primary" onClick={() => this.click_RestaurarUser(this.state.UserParaRestaurar)}>Restaurar Usuário</button>
                  </div>
               </div>
            </div>
         </div>


  
          <Info>
            <Title>Funcionários excluidos</Title>
            <Pesquisa>
              <p>pesquisa:</p>
              <Input 
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              placeholder="Ex: Danilo"/>  
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
                  <th scope="col"><strong>Data de exclusão</strong></th>
                  <th scope="col"><strong>Restaurar usuário</strong></th>
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
                      <td>{element.data_suspensao}</td>
                      <td><img data-toggle="modal" data-target="#exampleModal4" src={IconVoltar} onClick={() => this.NameNif_restore(element.nif, element.nome)} alt={element.nif} name={element.nome} style={{width: 25, height: 25, marginLeft: 50, cursor: 'pointer'}} /></td>
                      
  
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
          activeClassName={"active"}/>
  
          <hr></hr>
          <p style={{color: "#b4a3a3", fontSize: "15px"}}>@Criado por Denison Portela, Ana L. Gomes, Felipe Braga, Guilherme Cunha e Caio Daniel !"</p>
  
      </Container>
      )
    }
  }

export default Tabela_Funcionarios_Excluidos;