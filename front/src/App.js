import React from 'react'
import Login  from './pages/login'
import NavLateral from './components/Nav_Lateral'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
      <NavLateral ativado="2"/>

      {/*Carregando estilo global*/}
      <GlobalStyles />
    </div>
  );
}

export default App;
