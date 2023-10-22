import React, {useRef, useState} from 'react';
import {Button, TextInput, View} from 'react-native';

interface AddTodoInputMoleculeProps {
  onPressed: (contents: string) => void;
}

export function AddTodoInputMolecule({onPressed}: AddTodoInputMoleculeProps) {
  const [contents, setContents] = useState<string>('');

  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          flexGrow: 1,
        }}
        value={contents}
        onChangeText={contents => setContents(contents)}
      />
      <Button
        title="+"
        onPress={() => {
          onPressed(contents);
          setContents('');
        }}
      />
    </View>
  );
}
