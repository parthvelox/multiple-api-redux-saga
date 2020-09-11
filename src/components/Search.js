import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

//<img id={task.id} alt={task.alt_description} src={task.urls.small} />
export const SearchDescription = ({description}) => <ListGroup.Item>{description}</ListGroup.Item>;
export const SearchId = ({id}) => <ListGroup.Item>{id}</ListGroup.Item>;
//export const SearchBody = ({ urls.small }) => <ListGroup.Item>{body}</ListGroup.Item>;

SearchDescription.propTypes = {
  description: PropTypes.string.isRequired
};
SearchId.propTypes = {
    id: PropTypes.number.isRequired
  };
// ToDoBody.propTypes = {
//     body: PropTypes.string.isRequired
//   };
