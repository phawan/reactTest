import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';
import Dashboard from './pages/Home/components/Dashboard/Dashboard'
import "fontsource-roboto";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <Container maxWidth="lg">
          <h1> HELLO </h1>
          <Dashboard />
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </Container>

      </div>
    </div>
  );
}

export default App;
