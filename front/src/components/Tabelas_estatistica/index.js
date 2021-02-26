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
                            <th scope="col">Nome</th>
                            <th scope="col">Nif</th>
                            <th scope="col">Folhas gastas</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.data2.map((element) => (
                                <tr>
                                    <td>{element.nome}</td>
                                    <td>{element.nif}</td>
                                    <td>{element.folhas_usadas}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </Tabela>
        </Container>
    );
}

export default Tabelas_estatistica;