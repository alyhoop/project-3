import React from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <>
          <Form.Check type="radio" aria-label="radio 1" />
          <p>radio 1</p>
          <Form.Check type="radio" aria-label="radio 2" />
          <p>radio 2</p>
          <Form.Check type="radio" aria-label="radio 3" />
          <p>radio 3</p>
          <Form.Check type="radio" aria-label="radio 4" />
          <p>radio 4</p>
        </>
      </div>
    </div>
  );
}

export default App;
