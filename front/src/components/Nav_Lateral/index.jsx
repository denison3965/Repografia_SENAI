import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo'

//importando os logos
import Icon_Ativado from '../../assets/img/ativado.png'
import Icon_Grafico from '../../assets/img/grafico.png'
import Icon_Folha from '../../assets/img/folha.png'
import Icon_Pessoa from '../../assets/img/pessoa.png'
import Icon_Banco from '../../assets/img/banco.png'
import { Link } from 'react-router-dom'
import Grupo from '../../assets/img/grupo-de-usuarios.png'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom'

import { Container, NavIcons } from './styles';

const cookies = new Cookies()


function Nav_Lateral(props) {

    const [infoUser, setInfoUser] = useState({ nome: '', sobrenome: '' })
    const [showPage, setShowPage] = useState(false)
    const [ativado , setAtivado] = useState('')
    const history = useHistory()

    function BloquearFeedback(req, res){
        axios.get(`${process.env.REACT_APP_SERVER_BASE}/bloquear-requisicao/${infoUser.nif}`,{
        })

        .then((res) => {
            setInfoUser(res.data)
            console.log(res)
            if(res.data == false){
                alert('Você possui feedbacks pendentes, por favor, averiguar.')
                history.push ('/perfil-adm')
            }
        })
    }   

    useEffect(()=>{
        setAtivado(props.ativado)
        
        var token = cookies.get('tokenJWT')


        axios.get(process.env.REACT_APP_SERVER_TO_AUTHENTICATE, {
           method: 'GET',
           headers: { 'X-access-token': token }
        }).then((res) => {
        if (res.data[0].auth) {
                setShowPage(true)

            //Pegando as informacoes do user pelo nif
            let url = `${process.env.REACT_APP_SERVER_BASE}/buscar-user-nif/${res.data[0].nif}`

            axios.get(url).then(async(res) => {
                console.log(res)
                 setInfoUser(res.data)

            }).catch((err) => {
                console.log(err)
            })
        } else {
            history.push("/")
        }
        }).catch(() => { history.push("/") })
     },[])

  return (
      <Container>
        <div className="Nav_Lateral_top_side">
            <div class="Nav_Latera_Logo">
                <Logo width="150px" height="40px" />
            </div>

            <NavIcons>
                <li>
                    <div className="Nav_Lateral_li_esquerdo">
                        <img src={Icon_Pessoa} style={{width:"25px", height:"25px"}} alt="banco img"/>
                        <Link to="/perfil-adm"><div className="Nav_Lateral_Icon_title">Perfil Adm</div></Link>
                    </div>
                    {
                        ativado == "1" ? (
                        <img className="Nav_Lateral_Icon_Ativado"src={Icon_Ativado} style={{width:"25px", height:"25px"}} alt="banco img"/>
                        ):<div></div>
                    }
                    
                </li>
                <li>
                    <div className="Nav_Lateral_li_esquerdo">
                        <img src={Icon_Banco} style={{width:"25px", height:"25px"}} alt="banco img"/>
                        <Link to="/registros"><div className="Nav_Lateral_Icon_title">Registros</div></Link>
                    </div>
                    {
                        ativado == "2" ? (
                        <img className="Nav_Lateral_Icon_Ativado"src={Icon_Ativado} style={{width:"25px", height:"25px"}} alt="banco img"/>
                        ):<div></div>
                    }
                    
                </li>
                <li>

                    <div className="Nav_Lateral_li_esquerdo">
                        <img src={Icon_Grafico} style={{width:"25px", height:"25px"}} alt="Grafico img"/>
                        <Link to="/graficos"><div className="Nav_Lateral_Icon_title">Gráficos e relatórios</div></Link>
                    </div>

                    {
                        ativado == "3" ? (
                        <img className="Nav_Lateral_Icon_Ativado"src={Icon_Ativado} style={{width:"25px", height:"25px"}} alt="banco img"/>
                        ):<div></div>
                    }

                </li>
                <li> 

                    <Link to="/funcionarios-cadastrados">
                        <div className="Nav_Lateral_li_esquerdo">
                            <img src={Grupo} style={{width:"25px", height:"25px"}} alt="pessoas img"/>
                            <div className="Nav_Lateral_Icon_title">Funcionários </div>
                        </div>
                    </Link>

                    {
                        ativado == "4" ? (
                        <img className="Nav_Lateral_Icon_Ativado"src={Icon_Ativado} style={{width:"25px", height:"25px"}} alt="banco img"/>
                        ):<div></div>
                    }

                </li>
            </NavIcons>
        </div>

        <div className="Nav_Lateral_Bottom">
            <NavIcons>
                <Link to='/formulario' onClick={BloquearFeedback}>
                    <li>
                        <img src={Icon_Folha} style={{width:"25px", height:"25px"}} alt="formulario"/>
                        <div className="Nav_Lateral_Icon_title">Formulário para requisição</div>
                    </li>
                </Link>
            </NavIcons>
            
        </div>
        
      </Container>
  )
}

export default Nav_Lateral;