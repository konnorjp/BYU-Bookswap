import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bookUpdate } from '../../../../actions';
import { CardSection, Input } from '../../../components/common';

class BookForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
        <Input
          label='Image'
          placeholder='image URL'
          value={this.props.imageURL}
          onChangeText={value => this.props.bookUpdate({ prop: 'imageURL', value })}
        />
      </CardSection>

        <CardSection>
          <Input
            label='Title'
            placeholder='Pride and Prejudice'
            value={this.props.title}
            onChangeText={value => this.props.bookUpdate({ prop: 'title', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Author'
            placeholder='Jane Austen'
            value={this.props.author}
            onChangeText={value => this.props.bookUpdate({ prop: 'author', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='ISBN'
            placeholder='9780141439518'
            value={this.props.isbn}
            onChangeText={value => this.props.bookUpdate({ prop: 'isbn', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='BYU Course Number'
            placeholder='ENGL 291'
            value={this.props.courseNumber}
            onChangeText={value => this.props.bookUpdate({ prop: 'courseNumber', value })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Condition</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.condition}
            onValueChange={value => this.props.bookUpdate({ prop: 'condition', value })}
          >
            <Picker.Item label='Fantastic Four' value='Fantastic' />
            <Picker.Item label='The Amazing Spiderman' value='Amazing' />
            <Picker.Item label='Good' value='Good' />
            <Picker.Item label='Okay' value='Okay' />
            <Picker.Item label='Bad' value='Bad' />
          </Picker>
        </CardSection>

        <CardSection>
          <Input
            label='Price'
            placeholder='9.00'
            value={this.props.price}
            onChangeText={value => this.props.bookUpdate({ prop: 'price', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = ({ BookReducer }) => {
  if (BookReducer === null) {
    return {};
  }
  const { imageURL, title, author, isbn, courseNumber, condition, price } = BookReducer;

  return { imageURL, title, author, isbn, courseNumber, condition, price };
};

export default connect(mapStateToProps, { bookUpdate })(BookForm);
