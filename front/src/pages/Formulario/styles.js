import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    height: 312vh;
    background-color: var(--color-branco);
    p {
        font-weight: 300;
    }

    .titulo_do_formulario{
        color: #fff;
        position: absolute;
        margin-top: 5vh;
        margin-left: 16.5vw;
        font-weight: 300;
        font-style: italic;
    }

    .form_esquerda{
        width: 50%;
        max-width: 50%;
        height: 76%;
        max-height: 76%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        margin-bottom: -38vh;
        margin-top: -25vh;
    }
    .form_direita{
        width: 50%;
        max-width: 50%;
        height: 76%;
        max-height: 76%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin-bottom: -38vh;
        margin-top: -25vh;
    }
    .form_baixo{
        width: 100%;
        height: 33%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: hidden;
    }

   .div_titulo_form{
        width: 100%;
        height: min-content;
        border-bottom: solid;
        border-width: 1px;
    }
    .titulo_form{
        width: 100%;
        height: 95%;
        margin-top: 2.2%;
        margin-bottom: 2.2%;
        text-align: center; 
        font-weight: bold;
    }

    .inf_solicitacao{
        width:40vw;
        height:66vh;
        max-width: 40vw;
        max-height: 66vh;
        border: solid;
        border-width: 1px;
        border-radius:2px;
        margin-right: -5vw;
        margin-bottom: 2vh;
        font-size: 1.2vw;
        
        background-color: var(--color-azulMaisClaro);
    }
    .div1_informacao{
        margin-top: 2vh;
        padding: 1vw;
        width: 100%;
        height: 100%
    }

    .div1_p{
        display:flex;
        width:100%;
        min-width: 100%;
        height: min-content;
        padding: 0.8vw;
    }
    .p_resposta{
        margin-left: 1vw;
    }


    .inf_requisicao{
        width:40vw;
        height: 100vh;
        max-width: 40vw;
        max-height: 100vh;
        border: solid;
        border-width: 1px;
        border-radius:2px;
        margin-right: -5vw;
        margin-top: 2vh;
        font-size: 1.2vw;
        background-color: var(--color-azulMaisClaro);
    }

    .div2_informacao{
        padding: 1vw;
        width: 100%;
        height: 57%;
    }

    .div2_p_input{
        display:flex;
        width:98%;
        min-width: 98%;
        height: min-content;
        padding: 0.8vw;
    }
    .div2_input_number{
        margin-left: 1vw;
        width: 13%;
        height: 5vh;
    }
    .div2_input_text{
        margin-left: 1vw;
        width: 60%;
        height: 5vh;
    }
    .div_OBS{
        display:flex;
        flex-direction: column;
        margin-top: -2vh;
        width:100%;
        min-width: 100%;
        height: max-content;
        padding: 1.8vw;
        
    }
    .div_OBS_titulo{
        width: 100%;
        height: min-content;
        text-align: center; 
        font-weight: bold;
    }
    .div_OBS_input{
        width: 100%;
        height: 24vh;
        resize: none;
    }

    .acabamento{
        width:40vw;
        height: 138vh;
        max-width: 40vw;
        max-height: 138vh;
        border: solid;
        border-width: 1px;
        margin-left: -6vw;
        background-color: var(--color-azulMaisClaro);
    }

    .acabamento_sub_titulo_form{
        width: 100%;
        height: min-content;
        border-top: solid;
        border-bottom: solid;
        border-width: 1px;
    }

    .div1_acabamento{
        width:100%;
        min-width: 100%;
        height: 37%;
        min-height: 37%;
        padding: 1vw;
        padding-top: 4vh;
        
    }

    .div2_acabamento{
        width:100%;
        min-width: 100%;
        height: 23.7%;
        min-height: 23.7%;
        padding-top: 9vh;
        padding-left: 4vw;
    }

    .div3_acabamento{
        width:100%;
        min-width: 100%;
        height: 23%;
        min-height: 23%;
        padding-top: 8vh;
        padding-left: 4vw;
    }

    .container {
        width: 50%;
        display: block;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        font-size: 1.2vw;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #fff;
        border: solid;
        border-width: 1px;
        border-radius: 20%;
    }

    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    .container input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }

    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .div_checkbox{
        display: flex;
        width: 100%;
        max-width: 100%;
        height: min-content;
        padding: 0.8vw;
    }

    .div_dropdown_form_direita{
        width: 40vw;
        height: 14.2vh;
        margin-left: -6vw;
        margin-bottom: 3vh;
        margin-top: -25vh;
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;

    }
    .dropdown_form_direita p{
        flex:1;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .dropdown_form_direita{
        width: 15vw;
        height: 9vh;
        margin: 5%;
        margin-left: 2.7vw;
        border: solid;
        border-width: 1px;
        border-radius: 2px;
        margin-bottom: 5vh;
        font-size:20px;
        background-color: var(--color-azulMaisClaro);
    }
    .dropdown_form_baixo{
        width: 13vw;
        height: 7vh;
        margin: 5%;
        margin-left: 2.7vw;
        border: solid;
        border-width: 1px;
        border-radius: 2px;
        margin-bottom: 5vh;
        font-size:20px;
        background-color: var(--color-azulMaisClaro);
    }
    .div_assinatura{
        width: 40vw;
        height: 20vh;
        margin-left: -6vw;
        display: flex;
        margin-bottom: -22vh;
    }
    .assinatura{
        font-size: 2vw;
        align-self:flex-end;
    }
    .div_upload{
        width: 70vw;
        height: 40vh;
        border: 1px dashed var(--color-preto);
        background: hidden;
        border-radius: 65px;
        text-align: center;
        margin-bottom: 6vh;
    }
    .titulo_upload{
        width: 70vw;
        font-size: 2vw;
        background-color:white;
        text-align: center;
        margin-left: -1.5vw;
    }
    .text_upload{
        font-size: 1.5vw;
        position: absolute;
        margin-top: 9%;
        margin-left: 25%;
    }
    .input_exemplar{
        position: absolute;
        text-align: center;
        margin-left: 3.5vw;
        font-family: inherit;
        font-size: 1.3vw;
        line-height: inherit;
        display: block;
        padding-top:32.7vh;
        padding-bottom: 2vh;
        padding-right: 17.5vw;
        padding-left: 17.5vw;
    }
    .img_cloud{
        margin-left: -2.5%;
        margin-top: 3%;
        margin-bottom:3%;
        width: 5vw;
        height: 10vh;
        position: absolute;
    }
    .sair--button{
        cursor: pointer;
        height: 2vh;
        width: 4vw;
        color: #626262;
        position: absolute;
        margin-left: 91%;
    }
    .div_pai--button{
        width: 100%;
        padding: 2vw;
    }
    option{
        font-size: 16px;
    }
    @media only screen and (max-width: 779px) {
        .img_cloud {
            margin-top: -1%;
        }
    }
`;
