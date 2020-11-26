import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


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
