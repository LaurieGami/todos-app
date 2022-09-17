import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../components/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
