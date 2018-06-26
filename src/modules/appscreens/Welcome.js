import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button } from '../components/common';

class Welcome extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    drawUnderNavBar: true
  }

  onButtonPress() {

  }

  onSignUpPress() {
    this.props.navigator.push({
      screen: 'app.SignUp',
      animated: false,
    });
  }

  onSignInPress() {
    this.props.navigator.push({
      screen: 'app.SignIn',
      animated: false,
    });
  }

  render() {
    const {
      viewStyle,
      topView,
      topText,
      BYUStyle,
      BookSwapStyle,
      bottomView,
      bottomText,
      facebookStyle,
      orStyle,
      textStyle,
      signInStyle,
      fontStyle
    } = styles;

    return (
      <View style={viewStyle}>
        <StatusBar
          barStyle={'light-content'}
        />
        <View style={topView}>
          <View style={topText}>
            <Text style={BYUStyle}>
              <Text>B</Text>
              <Text style={{ fontSize: 72 }}>Y</Text>
              <Text>U</Text>
            </Text>
            <Text style={BookSwapStyle}>BookSwap</Text>
            <Text style={fontStyle}>Buy and sell your books</Text>
          </View>
        </View>
        <View style={bottomView}>
          <View style={bottomText}>
            <View style={facebookStyle}>
              <Button onPress={this.onButtonPress.bind(this)}>Log In With Facebook</Button>
            </View>
            <View style={textStyle}>
              <Text style={orStyle}>----- OR -----</Text>
                <Text
                  style={{ color: 'white', fontWeight: '600' }}
                  onPress={this.onSignUpPress.bind(this)}
                >Sign Up With Email</Text>
                <Text style={signInStyle} onPress={this.onSignInPress.bind(this)}>
                  <Text>Already have an account?</Text>
                  <Text style={{ fontWeight: 'bold' }}> Sign In</Text>
                </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'black'
  },
  topView: {
    flex: 4
  },
  topText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  BYUStyle: {
    fontSize: 56,
    fontWeight: '900',
    padding: 5,
    color: '#001E42',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  BookSwapStyle: {
    fontSize: 32,
    padding: 5,
    paddingBottom: 15,
    letterSpacing: 2,
    color: 'white',
    fontWeight: '600'
  },
  bottomView: {
    flex: 2
  },
  bottomText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  facebookStyle: {
    flex: 1,
    height: 50,
    margin: 10
  },
  orStyle: {
    fontSize: 10,
    paddingBottom: 10,
    color: 'white',
    fontWeight: '600'
  },
  textStyle: {
    flex: 4,
    alignItems: 'center',
    margin: 10
  },
  signInStyle: {
    paddingTop: 75,
    fontSize: 10,
    color: 'white',
    fontWeight: '600'
  },
  fontStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
};

export default Welcome;
