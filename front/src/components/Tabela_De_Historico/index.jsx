import React from 'react';
import { Container } from './styles';

function Tabela_De_Historico() {
  return (
      <Container>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">nome da requisicao</th>
                <th scope="col">paginas</th>
                <th scope="col">cópias</th>
                <th scope="col">total de paginas</th>
                <th scope="col">departamento</th>
                <th scope="col">cc</th>
                <th scope="col">aprovado</th>
                <th scope="col">data do pedido</th>
                <th scope="col">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Apostila C#</th>
                <td>40</td>
                <td>70</td>
                <td>900</td>
                <td>Informatica</td>
                <td>20150102</td>
                <td>Ok</td>
                <td>24/11/2020</td>
                <td>Bom</td>
                <td>+</td>
              </tr>
              <tr>
              <th scope="row">Apostila C#</th>
                <td>40</td>
                <td>70</td>
                <td>900</td>
                <td>Informatica</td>
                <td>20150102</td>
                <td>Ok</td>
                <td>24/11/2020</td>
                <td>Bom</td>
                <td>+</td>
              </tr>
              <tr>
              <th scope="row">Apostila C#</th>
                <td>40</td>
                <td>70</td>
                <td>900</td>
                <td>Informatica</td>
                <td>20150102</td>
                <td>Ok</td>
                <td>24/11/2020</td>
                <td>Bom</td>
                <td>+</td>
              </tr>
            </tbody>
          </table>
      </Container>
  );
}

export default Tabela_De_Historico;