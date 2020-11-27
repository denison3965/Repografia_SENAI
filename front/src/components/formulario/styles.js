import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    height: 290vh;
    background-color: var(--color-branco);

    html, body{
        height: 100%
    }

    .form_esquerda{
        width: 50%;
        height: 75%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        margin-bottom: -30vh;
    }
    .form_direita{
        width: 50%;
        height: 75%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin-bottom: -30vh;
    }
    .form_baixo{
        width: 100%;
        height: 25%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-branco)
    }

    .inf_solicitacao{
        width:40vw;
        height:50vh;
        border: solid;
        border-width: 1px;
        border-radius:2px;
        margin-left: 1vw;
        margin-right: -5vw;
        margin-bottom: 2vh;
        background-color: var(--color-azulMaisClaro);
    }
    .inf_requisicao{
        width:40vw;
        height: 100vh;
        border: solid;
        border-width: 1px;
        border-radius:2px;
        margin-left: 1vw;
        margin-right: -5vw;
        margin-top: 2vh;
        background-color: var(--color-azulMaisClaro);
    }
    .acabamento{
        width:40vw;
        height: 122vh;
        border: solid;
        border-width: 1px;
        margin-left: -6vw;
        background-color: var(--color-azulMaisClaro);
    }
    .div_dropdown{
        width: 40vw;
        height: 14.2vh;
        margin-left: -6vw;
        margin-bottom: 3vh;
        margin-top: -25vh;
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .dropdown{
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
        border: 1px dashed black;
        background: hidden;
        border-radius: 65px;
        text-align: center;
    }
    .tittle_upload{
        width: 70vw;
        font-size: 2vw;
        background-color:white;
        text-align: center;
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
`;
