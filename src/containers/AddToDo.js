import React from 'react';
import { connect } from 'react-redux';
import { addLimit } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let AddToDo = ({ dispatch }) => {
    let input;
    
    return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addLimit(input.value));
        input.value = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="number"
            placeholder="Enter an number"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Limit</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
AddToDo = connect()(AddToDo);

export default AddToDo;