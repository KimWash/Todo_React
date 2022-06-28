import React from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';

const IconButton: React.FC<{
  icon: React.ReactElement;
  onClick: () => void;
  _style?: StyleProp<ViewStyle>;
}> = ({icon, onClick, _style}) => (
  <View style={_style} onTouchEnd={onClick}>
    {icon}
  </View>
);

export default IconButton;
