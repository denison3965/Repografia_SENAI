import styled from 'styled-components';

export const Container = styled.div`

    margin-left: 30px;
    margin-right:30px;
  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a{
    background-color: red ;
    border-color: red ;
    color: #fff;
  }
  .pagination > li > a{
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    color: #fff;
    border-color: red;
    outline: none ;
  }
  .pagination > li > a, .pagination > li > span{
    color: red
  }
  .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius: unset
  }
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between; 
`;
export const Tabela = styled.div`

`;
export const Pesquisa = styled.div`
    display: flex;
    margin-top: 15px;

    p{
        margin-right: 15px;
    }
`;
export const Title = styled.div`
font-size: 30px;
`;

export const Input = styled.input`
    height:25px;
    width: 150px;
    padding-left: 10px;
`;
