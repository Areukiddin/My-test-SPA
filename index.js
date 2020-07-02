import React from "react";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
