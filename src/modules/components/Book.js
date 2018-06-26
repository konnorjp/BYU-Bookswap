import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class Book extends Component {

  onRowPress() {
    this.props.navigator.push({
        screen: 'app.ViewBook',
        animated: true,
        passProps: this.props.book,
        title: this.props.book.title
    });
  }

  render() {
    const { title, author, imageURL } = this.props.book;
    const {
      leftView,
      rightView,
      sectionStyle,
      titleStyle,
      authorStyle
    } = styles;

    return (
      <TouchableOpacity activeOpacity={0.2} onPress={this.onRowPress.bind(this)}>
        <View style={sectionStyle}>
          <View style={leftView}>
            <Text>Image{imageURL}</Text>
          </View>
          <View style={rightView}>
            <Text style={titleStyle}>{title}</Text>
            <Text style={authorStyle}>{author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  sectionStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 5
  },
  rightView: {
    flex: 2,
    padding: 5,
    height: 75
  },
  leftView: {
    flex: 1,
    padding: 5,
  },
  titleStyle: {
    fontSize: 16
  },
  authorStyle: {
    fontSize: 12
  }
};

export default Book;
