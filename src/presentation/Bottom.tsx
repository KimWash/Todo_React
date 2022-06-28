import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import optimizedLook from './Global/BottomOptions';
import IconButton from './Global/IconButton';

export default () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems:"center",
      position: 'absolute',
      backgroundColor: 'white',
      borderTopStartRadius: 28,
      borderTopEndRadius: 28,
      padding: 20,
      bottom: 0,
      left: 0,
      right: 0,
      ...optimizedLook(),
    }}>
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 2,
        flex: 1,
        alignItems: 'center',
      }}>
      <TextInput style={{flex: 12}} />
      <View style={{flex: 0.5}} />
      <IconButton
        icon={<Icon name="calendar-outline" size={20}></Icon>}
        onClick={() => {}}
      />
    </View>
      <View style={{flex:0.05}}></View>
    <IconButton
      icon={<Icon name="add" size={35}></Icon>}
      onClick={() => {}}
      _style={{ borderRadius: 100, borderWidth:1.5, width:40, alignItems:"center"}}
    />
  </View>
);
