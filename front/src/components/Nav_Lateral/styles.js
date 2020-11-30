import styled from 'styled-components';

export const Container = styled.div`
  width: 225px;
  height:100%;
  position: fixed;
  background-color: var(--color-azul);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;

    .Nav_Latera_Logo{
      margin-top: 50px;
      margin-bottom: 70px;
      display: flex;
      justify-content: center;
    }

    .Nav_Lateral_Bottom{
      margin-bottom: 25px;
    }

`;

export const NavIcons = styled.ul`
  width:100%;

    li{
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid white;
      padding-bottom: 10px;
      padding-top: 10px;
      padding-left: 5px;
      cursor: pointer;
      justify-content: space-between;

      .Nav_Lateral_li_esquerdo{
        display: flex;
        flex-direction: row;
      }

      .Nav_Lateral_Icon_Ativado{
        
      }
    }
    .Nav_Lateral_Icon_title{
      color: white;
      margin-left: 15px;
      margin-top:3px;
      
    }

`;



