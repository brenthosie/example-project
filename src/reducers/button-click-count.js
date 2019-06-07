import { combineReducers } from 'redux'

const count = (state = 0, action) => {
  switch (action.type) {
    case 'button_click':
      return state + 1
    default:
      return state
  }
}

const todosCameBack = (state = false, action) => {
  switch (action.type) {
    case 'set_todos':
      return true
    default:
      return state
  }
}

export default combineReducers({ count, todosCameBack })
