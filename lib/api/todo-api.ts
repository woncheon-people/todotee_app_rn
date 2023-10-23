import axios, {Axios} from 'axios';
import {CreateTodoDto} from '../dto/create-todo.dto';
import {createAsyncThunk} from '@reduxjs/toolkit';

export class TodoApi {
  constructor(private readonly client: Axios) {}

  create(form: CreateTodoDto) {
    return createAsyncThunk('todos/addTodo', async () => {
      await this.client.post('/todos', JSON.stringify(form), {
        headers: {'Content-Type': 'application/json'},
      });
    });
  }

  getTodos() {
    return createAsyncThunk('todos/addTodo', async () => {
      const res = await axios.get('/todos');
      return res.data;
    });
  }
}
