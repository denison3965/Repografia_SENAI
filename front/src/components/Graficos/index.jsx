import React from 'react';
import { Container } from './styles';
import {Pie, Bar} from 'react-chartjs-2'


function Graficos(props) {

    console.log(props.data2)
    

    //Informações do grafico 1
    const data = {
        labels: [
            props.data[0].nome_departamento,
            props.data[1].nome_departamento,
            props.data[2].nome_departamento,
            props.data[3].nome_departamento,
            props.data[4].nome_departamento,
        ],
        datasets:[
            {
                label: 'Professores 2020 !',
                data: [
                    props.data[0].folhas_usadas,
                    props.data[1].folhas_usadas,
                    props.data[2].folhas_usadas,
                    props.data[3].folhas_usadas,
                    props.data[4].folhas_usadas
                ],
                backgroundColor:[
                    'rgba(255,99,132,1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ]
            },
        ]
    }

    const options = {
        title:{
            display: true,
            text: 'Número de folhas por departamento'
        }
    }

  return (
      <Container>
          <div className="grafico1"> 
              <Pie data={data} options={options}/>
          </div>
      </Container>
  );
}

export default Graficos;





