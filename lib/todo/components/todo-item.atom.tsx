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
      <View style={{padding: 5}}>
        <CheckBox
          boxType="square"
          style={{width: 20, height: 20, flex: 1}}
          animationDuration={0.3}
          onValueChange={value => {
            setState({checked: value});
            onChanged(value);
          }}
          value={state.checked}
        />
      </View>
      <View style={{width: 10}} />
      <Text
        style={{
          maxWidth: 250,
          fontSize: 16,
          flexGrow: 2,
          textDecorationLine: state.checked ? 'line-through' : 'none',
          color: state.checked ? 'lightgrey' : 'black',
        }}>
        {contents}
      </Text>
      <View style={{padding: 5}}>
        <Button title="삭제" onPress={onDelete} color="red" />
      </View>
    </View>
  );
}
