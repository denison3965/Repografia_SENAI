import React from 'react'
import Login  from './pages/login'
import Header from './components/Header'
import NavLateral from './components/Nav_Lateral'
import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'

function App() {
  return (
    <div className="App">

      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
