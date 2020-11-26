import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/GlobalStyles';
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
