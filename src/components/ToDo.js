import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

export const ToDoTitle = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;
export const ToDoId = ({ id }) => <ListGroup.Item>{id}</ListGroup.Item>;
export const ToDoBody = ({ body }) => <ListGroup.Item>{body}</ListGroup.Item>;

ToDoTitle.propTypes = {
    title: PropTypes.string.isRequired
};
ToDoId.propTypes = {
    id: PropTypes.number.isRequired
  };
ToDoBody.propTypes = {
    body: PropTypes.string.isRequired
  };
