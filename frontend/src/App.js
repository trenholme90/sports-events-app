import React from 'react';
import { Container } from 'reactstrap'
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
        <Container>
            <h1 className="mb-4 mt-4 text-center">Sports App</h1>
            <Routes></Routes>
        </Container>     
    </div>
  );
}

export default App;
