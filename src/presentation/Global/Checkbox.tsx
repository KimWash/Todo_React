import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckBox: React.FC<{
  checked: boolean;
  onChecked: (checked: boolean) => void;
}> = ({checked, onChecked}) => {
  return (
    <View style={boxStyle} onTouchEnd={() => onChecked(!checked)}>
      {checked ? <Icon name="checkmark-outline" size={30}></Icon> : <View />}
    </View>
  );
};

const boxStyle: StyleProp<ViewStyle> = {
  borderWidth: 2,
  borderRadius: 100,
  width: 35,
  height: 35,
};

export default CheckBox;
