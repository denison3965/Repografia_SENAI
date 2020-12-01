import React from 'react';
import Header from '../../components/Header'
import User_Box_Info from '../../components/User_Box_Info'
import { Link } from 'react-router-dom'
import AddIcon from '../../assets/img/add.png'


import { Container, Nav_Header, Area_Cadastro, Navegation } from './styles';

function Cadastro() {
  return (
    <Container>
      <Nav_Header>
        <Header />
      </Nav_Header>

      <Area_Cadastro>
        <div className="User_Box_Info_Area">
          <User_Box_Info />
          <hr></hr>

          <Navegation>
            <ul>
              <Link to="/funcionarios-cadastrados">
                <li>Funcionários cadastrados</li>
              </Link> 

              <li>/</li>

              <Link>
                <li>Cadastro</li>
              </Link>


            </ul>
          </Navegation>

          <div className="container_cadastro">
            <div className="top_info">
              <img src={AddIcon} alt="pessoa" style={{width: 50, height: 50}} />
              <h2>Cadastro</h2>
            </div>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Nome</label>
                  <input type="text" class="form-control" id="inputNome" placeholder="Ex: Pedro" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Cargo</label>
                  <input type="text" class="form-control" id="inputCargo" placeholder="Ex: Professor"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">NIF</label>
                  <input type="text" class="form-control" id="inputNif" placeholder="Ex: 0000000"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Telefone</label>
                  <input type="text" class="form-control" id="inputTelefone" placeholder="Ex: 11 99556-8741"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="senia@outlook.com"/>
                </div>
              </div>
              <div className="area_botao">
                
                  <button type="button" class="btn btn-success">Cadastrar</button>
                  <Link to="/funcionarios-cadastrados"><button type="button" class="btn btn-danger">Voltar</button></Link>
               
              </div>
              

            </form>
          </div>
          

        </div>
      </Area_Cadastro>
    </Container>
  )
}

export default Cadastro;