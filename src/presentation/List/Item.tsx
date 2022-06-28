import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Todo from '../../model/Todo';
import Card from '../Global/Card';
import CheckBox from '../Global/Checkbox';

const TodoItem: React.FC<{todo: Todo}> = ({todo}) => {
  const [checked, setChecked] = React.useState(false);
  const isDoneText = (
    <Text style={todo.isDone ? itemStyle.doneText : itemStyle.notDoneText}>
      {todo.isDone ? '완료됨' : '완료되지 않음'}
    </Text>
  );
  return (
    <Card>
      <View style={{flexDirection:"row"}}>
        <View style={{flex: 6}}>
          <Text>{todo.name}</Text>
          <Text>
            Due to: <Text>{todo.deadline.toLocaleString()}</Text>
          </Text>
          {isDoneText}
        </View>
        <View style={{justifyContent:"center"}}>
          <CheckBox checked={checked} onChecked={(checked) => {
            setChecked(checked);
          }} />
        </View>
      </View>
    </Card>
  );
};

const itemStyle = StyleSheet.create({
  doneText: {
    color: 'green',
  },
  notDoneText: {
    color: 'red',
  },
});

export default TodoItem;
