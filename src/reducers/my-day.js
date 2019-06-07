import { combineReducers } from 'redux'
const todos = (state = [], action) => {
  switch (action.type) {
    case 'set_todos':
      return action.payload.todos
    default:
      return state
  }
}

export default combineReducers({ todos })

export const getTodos = state => state.myDay.todos
