import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    createTodo(state, action) {
      state.push(action.payload)
    },
  }
})

export const { createTodo } = todosSlice.actions

export default todosSlice.reducer