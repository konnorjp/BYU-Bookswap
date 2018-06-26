import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { formUpdate, createUser } from '../../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../../components/common';

class SignUp extends Component {
  onButtonPress() {
    const { email, password, firstName, lastName } = this.props;
    this.props.createUser({ email, password, firstName, lastName }, (user) => {
      if (user !== null) {
        this.props.navigator.resetTo({
            screen: 'app.CreateProfile',
            animated: false
        });
      }
    });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create User
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="First Name"
            placeholder="Luke"
            onChangeText={value => this.props.formUpdate({ prop: 'firstName', value })}
            value={this.props.firstName}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name"
            placeholder="Skywalker"
            onChangeText={value => this.props.formUpdate({ prop: 'lastName', value })}
            value={this.props.lastName}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={value => this.props.formUpdate({ prop: 'email', value })}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={value => this.props.formUpdate({ prop: 'password', value })}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ signUp }) => {
  const { firstName, lastName, email, password, error, loading } = signUp;
  return {
    firstName,
    lastName,
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  formUpdate, createUser
})(SignUp);
