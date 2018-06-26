import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { getUserBooks, clearBookForm } from '../../../../actions';
import Book from '../../../components/Book';

class MyBooks extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Add',
        id: 'addABook',
        buttonFontSize: 14,
        buttonFontWeight: '600',
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.props.getUserBooks();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'addABook') {
        this.props.clearBookForm();
        this.props.navigator.push({
          screen: 'app.AddBook',
          animated: false,
          title: 'Add a Book'
        });
      }
    }
  }

  createDataSource({ books }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(books);
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={(book) => <Book book={book} navigator={this.props.navigator} />}
      />
    );
  }
}

const mapStateToProps = state => {
  const books = _.map(state.BookFirebaseReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { books };
};

export default connect(mapStateToProps, { getUserBooks, clearBookForm })(MyBooks);
