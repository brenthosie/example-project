const someApiCall = () => {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, { todos: [{ id: 1, text: 'my todo' }] }), 3000)
  })
}

export const dispatchClick = () => {
  return async dispatch => {
    dispatch({ type: 'fetch_todos_start'})
    const { todos = [] } = await someApiCall()

    dispatch(setTodosToStore(todos))
  }
}

export const buttonClick = () => (
  {
    type: 'button_click'
  }
)

const setTodosToStore = todos => (
  {
    type: 'set_todos',
    payload: { todos }
  }
)
