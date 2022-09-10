import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo } from './types';
import initialState from './initialState';

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    complete: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((item) => (item.id === action.payload.id ? { ...item, completed: !item.completed } : item));
    },
    editName: (state, action: PayloadAction<{ todo: Todo; title: string }>) => {
      const { todo, title } = action.payload;
      state.todos = state.todos.map((item) => (item.id === todo.id ? { ...item, title } : item));
    },
  },
});

export const { add, complete, editName } = todoSlice.actions;
export * from './types';
export default todoSlice.reducer;
