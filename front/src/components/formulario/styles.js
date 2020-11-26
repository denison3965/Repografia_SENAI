import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 180vh;
    background-color: var(--color-branco);

    .form_esquerda{
        width: 50%;
        height: 100%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }
    .form_direita{
        width: 50%;
        height: 100%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
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
        height: 121vh;
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


`;
