import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    createTodo: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(text) {
        return {
          payload: {
            text,
            isCompleted: false
          },
        };
      },
    },
    markTodoAsCompleted(state, action) {
      const todoToUpdate = state.find(todo => todo.text === action.payload)
      if (todoToUpdate) {
        todoToUpdate.isCompleted = true
      }
    },
    removeTodo(state, action) {
      return state.filter(todo => todo.text !== action.payload)
    },
  },
});

export const { createTodo, markTodoAsCompleted, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;