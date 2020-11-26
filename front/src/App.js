import React from 'react'
import Login  from './pages/login'
import Header from './components/Header'
import NavLateral from './components/Nav_Lateral'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
      <Header />

      {/*Carregando estilo global*/}
      <GlobalStyles />
    </div>
  );
}

export default App;
