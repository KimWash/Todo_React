import React from 'react';
import {
  FlatList,
  GestureResponderEvent,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import Todo from './model/Todo';
import Bottom from './presentation/Bottom';
import optimizedLook from './presentation/Global/BottomOptions';
import Card from './presentation/Global/Card';
import Header from './presentation/Header';
import TodoItem from './presentation/List/Item';

const dummyData = new Todo('0', '빨래 돌리기', new Date(), false);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{flex:1, backgroundColor: "#f2f2f2"}}>
      <Header />
      <TodoItem todo={dummyData} />
      <Bottom/>
    </SafeAreaView>
  </SafeAreaProvider>
);

export default App;
