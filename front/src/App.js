import React from 'react'
import Login  from './pages/login'
import Header from './components/Header'
import NavLateral from './components/Nav_Lateral'
import GlobalStyles from './styles/GlobalStyles'
import Formulario from './components/formulario'


function App() {
  return (
    <div className="App">
      <Formulario/>

      {/*Carregando estilo global*/}
      <GlobalStyles />
    </div>
  );
}

export default App;
