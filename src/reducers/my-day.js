export default function (state = [], action) {
  switch (action.type) {
    case 'set_todos':
      return action.payload.todos
    default:
      return state
  }
}

export const getTodos = state => state.myDay.todos
