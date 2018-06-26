import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Input, Button, Spinner } from '../../components/common';
import {
  formUpdate,
  updateUser
} from '../../../actions';

class CreateProfile extends Component {
  onButtonPress() {
    const { username, photoURL, phoneNumber } = this.props;
    this.props.navigator.push({
        screen: 'app.Instructions',
        animated: true,
    });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create Profile
      </Button>
    );
  }

  render() {
    console.log(this.props.user);
    return (
      <Card>
        <CardSection>
          <Text>Name: {this.props.username}</Text>
        </CardSection>
        <Input
          label="Phone Number:"
          placeholder="222-222-2222"
          onChangeText={this.onPhoneChange.bind(this)}
          value={this.props.phoneNumber}
        />

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ signUp }) => {
  const { username, phoneNumber, email, photoURL, user } = signUp;
  return { username, phoneNumber, email, photoURL, user };
};

export default connect(mapStateToProps, {
  formUpdate, updateUser
})(CreateProfile);
