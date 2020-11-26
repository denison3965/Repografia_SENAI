import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login  from './pages/login'
import Header from './components/Header'
import NavLateral from './components/Nav_Lateral'
import GlobalStyles from './styles/GlobalStyles'
import Button from './components/Button'
import TabelaDeHistorico from './components/TabelaDeHistorico'

function App() {
  return (
    <div className="App">
      {/* <Header title = ""/>  */}
      {/* <Button width = "" height = "" title = ""/> */}
      <TabelaDeHistorico />

      {/*Carregando estilo global*/}
      <GlobalStyles />
    </div>
  );
}

export default App;
