import React from 'react';
import { Container } from './styles';
import {Pie, Bar} from 'react-chartjs-2'


function Grafico_barra(props) {

    console.log(props.data2)

    //Informações do grafico 2

    const data2 = {
        labels: [
            props.data2[0].nome + " " + props.data2[0].sobrenome,
            props.data2[1].nome + " " + props.data2[1].sobrenome,
            props.data2[2].nome + " " + props.data2[2].sobrenome,
            props.data2[3].nome + " " + props.data2[3].sobrenome,
            props.data2[4].nome + " " + props.data2[4].sobrenome,
        ],
        datasets:[
            {
                label: 'Número de folhas gastas por funcionários',
                data: [
                    props.data2[0].folhas_usadas,
                    props.data2[1].folhas_usadas,
                    props.data2[2].folhas_usadas,
                    props.data2[3].folhas_usadas,
                    props.data2[4].folhas_usadas,
                ],
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
            text: 'Número de folhas gastas por funcionários'
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
          <div className="grafico2"> 
             <Bar data={data2} options={options2}/>
          </div>
      </Container>
  );
}

export default Grafico_barra;





