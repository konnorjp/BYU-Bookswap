import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookUpdate, bookCreate } from '../../../../actions';
import { Card, CardSection, Button } from '../../../components/common';
import BookForm from './BookForm';

class AddBook extends Component {
  onButtonPress() {
    const { imageURL, title, author, isbn, courseNumber, condition, price } = this.props;

    this.props.bookCreate({
      imageURL,
      title,
      author,
      isbn,
      courseNumber,
      condition: condition || 'Fantastic',
      price }, () => {
        this.props.navigator.pop({
            animated: false
        });
      });
  }

  render() {
    return (
      <Card>
        <BookForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Book
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ BookReducer }) => {
  const { imageURL, title, author, isbn, courseNumber, condition, price } = BookReducer;

  return { imageURL, title, author, isbn, courseNumber, condition, price };
};

export default connect(mapStateToProps, {
  bookUpdate, bookCreate
})(AddBook);
