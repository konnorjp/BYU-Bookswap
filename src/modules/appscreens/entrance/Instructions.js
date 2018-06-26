import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection, Card, Button, Spinner } from '../../components/common';

class Instructions extends Component {
  onButtonPress() {
    this.props.navigator.resetTo({
        screen: 'app.Home',
        animated: true,
    });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Continue
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Instructions</Text>
        </CardSection>
        <CardSection>
          <Text>Scroll or Swipe to see all instructions</Text>
        </CardSection>
        <CardSection>
          <Text>Image of how to do stuff</Text>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default Instructions;
