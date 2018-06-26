import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { bookUpdate, changeBookInfo, deleteUserBook, getBook } from '../../../../actions';
import { Card, CardSection, Button, Confirm } from '../../../components/common';

class EditBook extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.book, (value, prop) => {
      this.props.bookUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { imageURL, title, author, isbn, courseNumber, condition, price, uid } = this.props;
    this.props.changeBookInfo({
      imageURL, title, author, isbn, courseNumber, condition, price, uid },
      () => {
        this.props.navigator.pop({
            animated: false
        });
      });
  }

  onAccept() {
    this.props.deleteUserBook(this.props.uid, () => {
      this.props.navigator.popToRoot({
          animated: true,
      });
      this.setState({ showModal: false });
    });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  navBack() {
    this.props.navigator.pop({
      animated: true
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Card>
          <BookForm book={this.props.book} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
              Delete Book
            </Button>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this book?
          </Confirm>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ BookReducer }) => {
  if (BookReducer === null) {
    return {};
  }
  const { imageURL, title, author, isbn, courseNumber, condition, price } = BookReducer;

  return { imageURL, title, author, isbn, courseNumber, condition, price };
};

export default connect(mapStateToProps, {
  bookUpdate, changeBookInfo, deleteUserBook, getBook
})(EditBook);
