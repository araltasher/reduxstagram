//  A reducers takes in two inputs
//  1-  The action
//  2-  The copy of the current state

export default function comments(state = [], action) {
  console.log(state, action);
  return state;
}
