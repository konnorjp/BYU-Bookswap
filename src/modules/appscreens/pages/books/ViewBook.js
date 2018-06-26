import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../../../components/common';
import { getBook } from '../../../../actions';

class ViewBook extends Component {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit',
        id: 'editABook',
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
    this.props.getBook(this.props.uid);
  }

  onNavigatorEvent(event) {
    const { imageURL, title, author, isbn, courseNumber, condition, price, uid } = this.props;
    const book = { imageURL, title, author, isbn, courseNumber, condition, price, uid };
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'editABook') {
        this.props.navigator.push({
          screen: 'app.EditBook',
          animated: false,
          title: 'Edit the Book',
          passProps: book
        });
      }
    }
  }

  render() {
    const { imageURL, title, author, isbn, courseNumber, condition, price } = this.props;

    return (
      <View>
        <CardSection>
          <Text>Image: {imageURL}</Text>
        </CardSection>

        <CardSection>
          <Text>Title: {title}</Text>
        </CardSection>

        <CardSection>
          <Text>Author: {author}</Text>
        </CardSection>

        <CardSection>
          <Text>ISBN: {isbn}</Text>
        </CardSection>

        <CardSection>
          <Text>BYU Course Number: {courseNumber}</Text>
        </CardSection>

        <CardSection>
          <Text>Condition: {condition}</Text>
        </CardSection>

        <CardSection>
          <Text>Price: {price}</Text>
        </CardSection>
      </View>
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

export default connect(mapStateToProps, { getBook })(ViewBook);
