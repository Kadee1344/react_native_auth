import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB2zDK__t4W9XL81Gub7K5PJ3LRyx8Gc4Q",
      authDomain: "auth-react-7c1d8.firebaseapp.com",
      databaseURL: "https://auth-react-7c1d8.firebaseio.com",
      projectId: "auth-react-7c1d8",
      storageBucket: "auth-react-7c1d8.appspot.com",
      messagingSenderId: "521250537367"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
