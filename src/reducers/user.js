const defaultState = {
  name: 'xavier'
}
export default function (state=defaultState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        name: action.payload
      }
    default:
      return state
  }
}