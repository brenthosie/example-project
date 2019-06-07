const someApiCall = () => {
  return new Promise(resolve => {
    setTimeout(resolve.bind(null, [{ id: 1, text: 'my todo' }]), 3000)
  })
}

export const dispatchClick = () => {
  return async dispatch => {
    const { todos = [] } = await someApiCall()

    dispatch(setTodosToStore(todos))
  }
}

const setTodosToStore = todos => {
  return {
    type: 'set_todos',
    payload: { todos }
  }
}
