import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ViewStyle} from 'react-native';
import {TodoItemAtom} from './components/todo-item.atom';
import {Todo} from '../domain/todo';
import {AddTodoInputMolecule} from './components/add-todo-input.molecule';

let sequence = 2;

interface TodoPageState {
  todos: Todo[];
}

export function TodoPage() {
  const [state, setState] = useState<TodoPageState>({
    todos: [
      
    ],
  });

  const viewStyle: ViewStyle = {
    paddingHorizontal: 20,
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <SafeAreaView>
      <View style={viewStyle}>
        <Text style={{fontSize: 32, fontWeight: '700'}}>TODOTEE</Text>
        <View style={{height: 10}}></View>
        <AddTodoInputMolecule
          onPressed={contents => {
            const newState = {todos: [...state.todos]};
            newState.todos.push({
              id: ++sequence,
              contents,
              checked: false,
            });
            setState(newState);
          }}
        />
        {state.todos.map((todo, index) => (
          <TodoItemAtom
            key={`todo-item-${index}`}
            value={todo.checked}
            contents={todo.contents}
            onChanged={status => {
              const newState = {todos: [...state.todos]};
              newState.todos[index].checked = status;
              setState(newState);
            }}
            onDelete={() => {
              const newState = {todos: [...state.todos]};
              newState.todos.splice(index, 1);
              setState(newState);
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
