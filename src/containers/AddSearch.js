import React from 'react';
import { connect } from 'react-redux';
import { addSearch } from '../actions/secondapi.action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let AddSearch = ({ dispatch }) => {
    let input;
    
    return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addSearch(input.value));
        input.value = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search Image"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
AddSearch = connect()(AddSearch);

export default AddSearch;