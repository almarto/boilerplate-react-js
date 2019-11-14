export const createReducer = (initialState, actionHandlers) => (
  state = initialState,
  action,
) =>
  actionHandlers.hasOwnProperty(action.type) //eslint-disable-line no-prototype-builtins
    ? actionHandlers[action.type](state, action.payload)
    : state
