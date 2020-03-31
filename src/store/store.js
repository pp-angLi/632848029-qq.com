export function reducer(state, action) {
  switch (action.type) {
    case "up":
      return state + 1
    case "down":
      return state - 1;
    default:
      return null;
  }
}