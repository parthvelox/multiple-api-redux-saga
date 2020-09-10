import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import * as ToDo from './ToDo';

const ToDoList = ({ toDoList }) => (
  <Jumbotron>
    <Table>
      <thead>
        <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        </tr>
      </thead>
      <tbody>
      {toDoList.map((toDo, index) => (
        <tr>
          <td>
        <ToDo.ToDoId key={index} {...toDo} />
        </td>
        <td>
        <ToDo.ToDoTitle key={index} {...toDo} />
        </td>
        <td>
        <ToDo.ToDoBody key={index} {...toDo} />
        </td>
        </tr>
      ))}
      </tbody>
    </Table>
  </Jumbotron>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ToDoList;