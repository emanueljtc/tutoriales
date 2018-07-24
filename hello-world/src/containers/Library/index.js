// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Library extends Component {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array,
    book: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
      this.props.loadBooks();
  }

  render() {
    console.log(this.props);
    return (
      <div className="Library">
        Librerias
      </div>
    );
  }
}

export default connect(state => ({
  books: state.library.books,
  book: state.library.book
}), actions)(Library);
