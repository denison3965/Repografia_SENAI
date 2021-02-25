import React, { useEffect, useState } from 'react';

import { Container, Tabela } from './styles';

function Tabelas_estatistica(props) {


    return (
        <Container>
            <Tabela>
                <h6 className="titulo" >Gasto de folhas - todos os departamentos</h6>
                <table className="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Nome do departamento</th>
                            <th scope="col">Folhas gastas</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.data.map((element) => (
                                <tr>
                                    <td>{element.nome_departamento}</td>
                                    <td>{element.folhas_usadas}</td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </Tabela>

            <Tabela>
                <h6 className="titulo" >Gasto de folhas - todos os departamentos</h6>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Primeiro</th>
                            <th scope="col">Último</th>
                            <th scope="col">Nickname</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Tabela>
        </Container>
    );
}

export default Tabelas_estatistica;