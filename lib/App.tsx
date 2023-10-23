import React, {createContext} from 'react';
import {TodoPage} from './todo/todo.page';
import {TodoApi} from './api/todo-api';
import {Axios} from 'axios';
import {Provider} from 'react-redux';
import {store} from './store';

interface DependencyMap {
  todoApi: TodoApi;
}

const dependencyMap: DependencyMap = {
  todoApi: new TodoApi(new Axios({baseURL: 'http://192.168.45.75:8080'})),
};

export const DependencyContext = createContext<DependencyMap>(dependencyMap);

function App(): JSX.Element {
  return (
    <DependencyContext.Provider value={dependencyMap}>
      <Provider store={store}>
        <TodoPage />
      </Provider>
    </DependencyContext.Provider>
  );
}

export default App;
