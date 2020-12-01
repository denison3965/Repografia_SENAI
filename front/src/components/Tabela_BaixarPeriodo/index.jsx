import React, {Component} from 'react';
import { Container } from './styles';
import Baixar from '../../assets/img/baixar.png'


export class Tabela_BaixarPeriodo extends Component {


    constructor(props) {
        super(props)
    
        this.state ={
            batata: []
    
        }
    }

    componentDidMount() {
        this.getData();
    }


    getData() {

        var dados = [
            {
                id: '01',
                periodo: '24/10/2020 a 24/11/2020',
                baixar: ''

            },
            {
                id: '02',
                periodo: '24/11/2020 a 24/12/2020',
                baixar: ''
            },
            {
                id: '03',
                periodo: '24/12/2020 a 24/01/2020',
                baixar: ''
            },

        ]

        this.setState({
            batata: dados
        })
    }

    render() {
        return (
            <Container>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"><strong>ID</strong></th>
                            <th scope="col"><strong>Período</strong></th>
                            <th scope="col"><strong>Baixar</strong></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.batata.map((element) => (
                                <tr>
                                    <th>{element.id}</th>
                                    <td>{element.periodo}</td>
                                    <td>{element.baixar}
                                    <img className="icons--baixar" src={Baixar}/>
                                    </td>
                                </tr>
                            ))

                        }



                    </tbody>
                </table>
            </Container>
        )
    }
}

export default Tabela_BaixarPeriodo;

