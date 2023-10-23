import {createSlice} from '@reduxjs/toolkit';
import {Todo} from '../../domain/todo';

let sequence = 0;

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const contents: string = action.payload;
      state.push({
        id: ++sequence,
        contents,
        checked: false,
      });
    },
    changeStatus: (state, action) => {
      const {index, status} = action.payload;
      state[index].checked = status;
    },
    deleteTodo: (state, action) => {
      const index: number = action.payload;
      state.splice(index, 1);
    },
  },
});

export const {addTodo, changeStatus, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
