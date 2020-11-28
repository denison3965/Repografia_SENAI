import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import IconVoltar from '../../assets/img/voltar.png'
import { Container, Info, Tabela, Title, Pesquisa, Input  } from './styles';

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
              tableData:slice
          })
      
      }
  
  
    componentDidMount(){
      this.getData();
  
    }
  
    getData() {
  
      //Aqui vai o fetch para a api pegar os registros no banco de dados
      var data = [
  
        {
          nif: '1646525',
          nome: 'Roberto',
          cargo: 'Professor',
          email: 'roberto@hotmail.com',
          fone: '(11) 99562-5456',
          datacriacao: '10/13/2002',
          dataexclusao: '10/12/2005'
        }

  
  
        
      ]
  
      // slice = de quanto a quanto sera exibido na tela
      // slice = data.slice(15, 15 + 5) 
      //slice = 20, ou seja na pagina ira commecar a listar pelo numero 20
      var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
      console.log(slice)
  
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData: data,
        tableData: slice
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
          return register.nif.toLowerCase().indexOf(this.state.search) !== -1 ||
                 register.nome.toLowerCase().indexOf(this.state.search) !== -1 ||
                 register.cargo.toLowerCase().indexOf(this.state.search) !== -1 ||
                 register.email.toLowerCase().indexOf(this.state.search) !== -1 ||
                 register.fone.toLowerCase().indexOf(this.state.search) !== -1 ||
                 register.datacriacao.toLowerCase().indexOf(this.state.search) !== -1 ||
                 register.dataexclusao.toLowerCase().indexOf(this.state.search) !== -1 
                 
        }
      )
  
      return(
        <Container>
  
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
                  <th scope="col">NIF</th>
                  <th scope="col">nome</th>
                  <th scope="col">cargo</th>
                  <th scope="col">email</th>
                  <th scope="col">fone</th>
                  <th scope="col">Data de criação</th>
                  <th scope="col">Data de exclusão</th>
                  <th scope="col">Restaurar usuário</th>
                </tr>
              </thead>
              <tbody>
                
                {
                  filterRegister.map((element) => (
                    <tr>
                      <td>{element.nif}</td>
                      <td>{element.nome}</td>
                      <td>{element.cargo}</td>
                      <td>{element.email}</td>
                      <td>{element.fone}</td>
                      <td>{element.datacriacao}</td>
                      <td>{element.dataexclusao}</td>
                      <td><img onClick={this.restaurarUsuario.bind(this)} src={IconVoltar} alt={element.nif} name={element.nome} style={{width: 25, height: 25, marginLeft: 50, cursor: 'pointer'}} /></td>
                      
  
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
          <p style={{color: "#ccc", fontSize: "15px"}}>@SENAI Suíço-Brasileira "Paulo Ernesto Tolle"</p>
  
      </Container>
      )
    }
  }

export default Tabela_Funcionarios_Excluidos;