import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner size="small" />
      )
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed!' });
          });
      });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@mail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={{ height: 20, width:100 }} />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })} />
        </CardSection>

        <Text style={styles.errorText}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
