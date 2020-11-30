import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    height: 360vh;
    background-color: var(--color-branco);
    p {
        font-weight: 300;
    }

    .form_esquerda{
        width: 50%;
        height: 80%;
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
        height: 80%;
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
        height:110vh;
        max-width: 40vw;
        max-height: 110vh;
        border: solid;
        border-width: 1px;
        border-radius:2px;
        margin-right: -5vw;
        margin-bottom: 2vh;
        font-size: 1.2vw;
        background-color: var(--color-azulMaisClaro);
    }
    .div1_informacao{
        padding: 2vw;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
    .p_esquerdo{
        width: 40%;
        margin-bottom: -5vh;
        margin-left: 2%;
        text-align: left;
    }
    .p_direito{
        width:48%;
        max-width: 48%;
        margin-bottom: -5vh;
        margin-right: 5%;
        text-align: left;
    }

    form div div p{

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
        background-color: var(--color-azulMaisClaro);
    }
    .acabamento{
        width:40vw;
        height: 182vh;
        max-width: 40vw;
        max-height: 182vh;
        border: solid;
        border-width: 1px;
        margin-left: -6vw;
        background-color: var(--color-azulMaisClaro);
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
    .tittle_upload{
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
        margin-left: 93%;
    }
    .div_pai--button{
        width: 100%;
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
