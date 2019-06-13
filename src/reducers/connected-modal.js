export default function (state = false, action) {
  switch (action.type) {
    case 'open-modal':
      return true
    case 'close-modal':
      return false
    default:
      return state
  }
}

export const isModalOpen = state => state.connectedModal
