import { connect } from 'react-redux';
import SearchList from '../components/SearchList';

const mapStateToProps = state => {
  return {
    searchList: state.searchList
  };
};

const SearchListContainer = connect(mapStateToProps)(SearchList);

export default SearchListContainer;