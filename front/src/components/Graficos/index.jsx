import React from 'react';
import { Container } from './styles';
import {Pie, Bar} from 'react-chartjs-2'


function Graficos() {

    //Informações do grafico 1
    const data = {
        labels: [
            'Atila',
            'Danilo',
            'Milton',
            'Sangra',
            'Claudia',
        ],
        datasets:[
            {
                label: 'Professores 2020 !',
                data: [3,2,2,1,5],
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
            text: 'Setor de Atuação'
        }
    }

    //Informações do grafico 2

    const data2 = {
        labels: [
            'Atila',
            'Danilo',
            'Milton',
            'Sandra',
            'Claudia',
        ],
        datasets:[
            {
                label: 'Funcionários',
                data: [3,2,2,1,5,2],
                backgroundColor:[
                    '#ee1141',
                    '#d3cf0f',
                    '#2198e7',
                    '#f57a00',
                    '#7330f8',
                    '#36cfc3',
                    '#1e3ada'
                ]
            },
        ]
    }

    const options2 = {
        title:{
            display: true,
            text: 'Funcionários'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min: 0,
                        stepSize:1
                    }
                }
            ]
        }
    }
  return (
      <Container>
          <div className="grafico1"> 
              <Pie data={data} options={options}/>
          </div>

          <div className="grafico2"> 
             <Bar data={data2} options={options2}/>
          </div>
      </Container>
  );
}

export default Graficos;





