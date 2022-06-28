import {View, Text} from 'react-native';
import React from 'react';
import TextStyles from '../styles/text';

const Header = () => (
  <View style={{alignItems: 'center', marginBottom:20}}>
    <Text style={TextStyles.titleText}>INU Todo</Text>
  </View>
);

export default Header;
