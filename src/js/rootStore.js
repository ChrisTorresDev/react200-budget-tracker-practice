import { createStore } from 'redux';

function tempReducer () {
  return null;
}

const rootStore = createStore (
  tempReducer,
  window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
);

export default rootStore;
