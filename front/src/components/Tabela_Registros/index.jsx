import React, { Component, useState } from 'react';
import ReactPaginate from 'react-paginate'
import SaibaMais from '../SaibaMais'
import { Container, Info, Tabela, Title, Pesquisa, Input  } from './styles';




export class Tabela_Registros extends Component {

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
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '21/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Danilo',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '26/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Danilo',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '23/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Milton',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'qualquer coisa C#',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'fdsfdsdfsdfdsf',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },
      {
        nomedarequisicao : 'teste',
        nomedosolicitante: 'Atila',
        departamento: 'Informatica',
        cc: '20150102',
        arquivo: 'apostila.pdf',
        copias: 30,
        paginas: 30,
        totalpaginas: 900,
        coordenador: 'Sergio',
        avaliado: 'Nao',
        data: '24/11/2020',
        dataentrega: '04/12/2020',
        observacao: 'Vou levar a apostila ai a tarde',
        acabamento: ' Encadernamento com espiral, Capa em pvc, frente e verso'
      },

      
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
  

  render(){

    let filterRegister = this.state.tableData.filter(
      (register) => {
        return register.nomedosolicitante.toLowerCase().indexOf(this.state.search) !== -1 ||
               register.nomedosolicitante.indexOf(this.state.search) !== -1 ||
               register.data.toLowerCase().indexOf(this.state.search) !== -1 ||
               register.coordenador.toLowerCase().indexOf(this.state.search) !== -1 ||
               register.coordenador.indexOf(this.state.search) !== -1 ||
               register.departamento.toLowerCase().indexOf(this.state.search) !== -1 ||
               register.departamento.indexOf(this.state.search) !== -1 ||
               register.cc.toLowerCase().indexOf(this.state.search) !== -1 ||
               register.avaliado.toLowerCase().indexOf(this.state.search) !== -1 ||
               register.avaliado.indexOf(this.state.search) !== -1
               
      }
    )

    return(
      <Container>

        <Info>
          <Title>Registros</Title>
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
                <th scope="col"><strong>nome da requisicao</strong></th>
                <th scope="col"><strong>solicitante</strong></th>
                <th scope="col"><strong>departamento</strong></th>
                <th scope="col"><strong>cc</strong></th>
                <th scope="col"><strong>paginas</strong></th>
                <th scope="col"><strong>cópias</strong></th>
                <th scope="col"><strong>total de paginas</strong> </th>
                <th scope="col"><strong>cordenador</strong></th>
                <th scope="col"><strong>avaliado</strong></th>
                <th scope="col"><strong>data do pedido</strong></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              
              {
                filterRegister.map((element) => (
                  <tr>
                    <td>{element.nomedarequisicao}</td>
                    <td>{element.nomedosolicitante}</td>
                    <td>{element.departamento}</td>
                    <td>{element.cc}</td>
                    <td>{element.paginas}</td>
                    <td>{element.copias}</td>
                    <td>{element.totalpaginas}</td>
                    <td>{element.coordenador}</td>
                    <td>{element.avaliado}</td>
                    <td>{element.data}</td>
                    <td><SaibaMais caminho="detalhes"data={element.nomedarequisicao}/></td>
                    

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




export default Tabela_Registros;