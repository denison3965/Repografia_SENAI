import React, { Component, useState } from 'react';
import ReactPaginate from 'react-paginate'


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
      currentPage: 0
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

  render(){



    return(
      <Container>
        <Info>
          <Title>Registros</Title>
          <Pesquisa>
            <p>pesquisa:</p>
            <Input placeholder="Ex: Danilo"/>  
          </Pesquisa>
        </Info>
        <Tabela>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">nome da requisicao</th>
                <th scope="col">solicitante</th>
                <th scope="col">departamento</th>
                <th scope="col">cc</th>
                <th scope="col">paginas</th>
                <th scope="col">cópias</th>
                <th scope="col">total de paginas </th>
                <th scope="col">cordenador</th>
                <th scope="col">avaliado</th>
                <th scope="col">data do pedido</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              
              {
                this.state.tableData.map((element) => (
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

    </Container>
    )
  }
}



export default Tabela_Registros;