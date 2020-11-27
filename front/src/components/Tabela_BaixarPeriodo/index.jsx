import React from 'react';
import { Container } from './styles';

function Tabela_BaixarPeriodo() {
    return (
        <Container>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Período</th>
                        <th scope="col">Baixar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">01</th>
                        <td>24/10/2020 a 24/11/2020</td>
                        <td>icone</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}

// export class Tabela_BaixarPeriodo extends Component {

// }

export default Tabela_BaixarPeriodo;

