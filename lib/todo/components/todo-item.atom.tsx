import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Button, Text, View, ViewStyle} from 'react-native';

interface TodoItemAtomProps {
  value: boolean;
  contents: string;
  onChanged: (status: boolean) => void;
  onDelete: () => void;
}

interface TodoItemAtomState {
  checked: boolean;
}

export function TodoItemAtom({
  value = false,
  contents,
  onChanged,
  onDelete,
}: TodoItemAtomProps) {
  const [state, setState] = useState<TodoItemAtomState>({checked: value});

  const viewStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
  };

  return (
    <View style={viewStyle}>
      <CheckBox
        boxType="square"
        style={{width: 20, height: 20}}
        animationDuration={0.3}
        onValueChange={value => {
          setState({checked: value});
          onChanged(value);
        }}
        value={state.checked}
      />
      <View style={{width: 10}}></View>
      <Text
        style={{
          fontSize: 16,
          flexGrow: 1,
          textDecorationLine: state.checked ? 'line-through' : 'none',
          color: state.checked ? 'lightgrey' : 'black',
        }}>
        {contents}
      </Text>
      <Button title="삭제하기" onPress={onDelete} />
    </View>
  );
}
