import React, { Component } from "react";
import Routes from "./Routes/Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Redux/reducers/index";
import thunk from "redux-thunk";

class App extends Component {
  state = {};
  render() {
    const store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
