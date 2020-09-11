import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import * as Search from './Search';

const SearchList = ({searchList}) => (
  <Jumbotron>
    <Table>
      <thead>
        <tr>
        <th>ID</th>
        <th>Body</th>
        </tr>
      </thead>
      <tbody>
      {searchList.map((search, index) => (
        <tr>
          <td>
        <Search.SearchId key={index} {...search} />
        </td>
         <td>
        <Search.SearchDescription key={index} {...search} />
        </td>
        </tr>
      ))}
      </tbody>
    </Table>
  </Jumbotron>
);

SearchList.propTypes = {
  searchList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
      //body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default SearchList;