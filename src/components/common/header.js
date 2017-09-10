import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    justifyContent: 'center',
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header;
