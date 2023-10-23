import React from 'react';
import {SafeAreaView, ScrollView, Text, View, ViewStyle} from 'react-native';
import {TodoItemAtom} from './components/todo-item.atom';
import {AddTodoInputMolecule} from './components/add-todo-input.molecule';
// import {DependencyContext} from '../App';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {addTodo, changeStatus, deleteTodo} from './slices/todos-slice';

export function TodoPage() {
  // const {todoApi} = useContext(DependencyContext);

  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const viewStyle: ViewStyle = {
    paddingHorizontal: 20,
  };

  return (
    <SafeAreaView>
      <View style={viewStyle}>
        <View style={{height: '20%', justifyContent: 'center'}}>
          <Text style={{fontSize: 32, fontWeight: '700'}}>TODOTEE</Text>
          <View style={{height: 10}}></View>
          <AddTodoInputMolecule
            onPressed={contents => {
              dispatch(addTodo(contents));
            }}
          />
        </View>

        <ScrollView style={{height: '80%'}}>
          {todos.map((todo, index) => (
            <TodoItemAtom
              key={`todo-item-${index}`}
              value={todo.checked}
              contents={todo.contents}
              onChanged={status => {
                dispatch(changeStatus({index, status}));
              }}
              onDelete={() => {
                dispatch(deleteTodo(index));
              }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
