import React from 'react';
import {FlatList, View} from 'react-native';
import Todo from '../../model/Todo';
import TodoItem from './Item';

function TodoList() {
  const dummyData = [new Todo('0', '빨래 돌리기', new Date(), false)];
  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={({item}) => <TodoItem todo={item} />}></FlatList>
    </View>
  );
}
export default TodoList;
