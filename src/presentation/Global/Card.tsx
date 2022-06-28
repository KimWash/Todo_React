import React, { ReactElement } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

const Card:React.FC<{children:ReactElement}> = ({children}) => {
  return <View style={cardStyle}>{children}</View>
}

const cardStyle:StyleProp<ViewStyle> = {
  borderRadius: 28,
  backgroundColor:"#ffffff",
  padding:20
}

export default Card;