import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Form} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="first radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="second radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="third radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="fourth radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                />
          </Col>
        </Form.Group>
      </fieldset>
    </Form>
      </div>
    </div>
  );
}

export default App;
