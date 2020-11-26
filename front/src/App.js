import React from 'react'
import Login  from './pages/login'
import NavLateral from './components/Nav_Lateral'
import GlobalStyles from './styles/GlobalStyles'
import Formulario from './components/formulario'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Formulario/>
      {/*Carregando estilo global*/}
      <GlobalStyles />
    </div>
  );
}

export default App;
