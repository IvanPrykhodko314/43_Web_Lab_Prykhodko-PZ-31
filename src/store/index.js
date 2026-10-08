import { createStore } from 'redux';
import { todosReducer } from './todoReducer';
export const store = createStore(todosReducer);