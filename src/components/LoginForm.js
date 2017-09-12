import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@mail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={text => this.setState({ email })}
            style={{ height: 20, width:100 }} />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
